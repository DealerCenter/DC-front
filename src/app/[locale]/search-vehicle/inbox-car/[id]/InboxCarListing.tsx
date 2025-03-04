import { getMailinatorMessageById } from '@/api/apiCalls'
import React, { useEffect, useState } from 'react'
import cheerio from 'cheerio'

type Props = {
  id: string
}

const InboxCarListing = ({ id }: Props) => {
  const [data, setData] = useState('')

  useEffect(() => {
    const getCar = async () => {
      const res = await getMailinatorMessageById(id)
      setData(res)
      console.log('res', res)
    }
    getCar()
  }, [])

  function removeDivByClassName(htmlString: string, className: string) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlString, 'text/html')

    doc.querySelectorAll(`div.${className}`).forEach((div) => div.remove())

    return doc.body.innerHTML
  }

  function removeSpecificText(htmlString, textToRemove) {
    if (typeof window === 'undefined') {
      return htmlString
    }

    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlString, 'text/html')

    // Loop through all elements to find text nodes (nodeType === 3)
    const allTextNodes = []
    const walker = document.createTreeWalker(
      doc.body,
      NodeFilter.SHOW_TEXT, // Only text nodes
      null,
      false
    )

    // Collect all text nodes in the document
    while (walker.nextNode()) {
      allTextNodes.push(walker.currentNode)
    }

    // Loop through each text node and replace the text
    allTextNodes.forEach((node) => {
      if (node.textContent.includes(textToRemove)) {
        // Remove the text to be removed
        node.textContent = node.textContent.replace(
          new RegExp(textToRemove, 'g'),
          ''
        )
      }
    })

    return doc.body.innerHTML
  }

  function removeFirstFiveBrTags(htmlString: string) {
    if (typeof window === 'undefined') {
      return htmlString
    }

    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlString, 'text/html')

    // Select all <br> tags in the document
    const brTags = doc.querySelectorAll('br')

    // Remove the first five <br> tags
    for (let i = 0; i < Math.min(7, brTags.length); i++) {
      brTags[i].remove() // Remove each <br> tag
    }

    return doc.body.innerHTML
  }

  const modifiedHtml1 = removeDivByClassName(
    data?.['parts']?.[1]?.['body'],
    'gmail_attr'
  )
  const modifiedHtml2 = removeSpecificText(
    modifiedHtml1,
    'Here is a vehicle that might interest you.'
  )
  const modifiedHtml3 = removeSpecificText(
    modifiedHtml2,
    'Please contact me at:'
  )
  const modifiedHtml4 = removeFirstFiveBrTags(modifiedHtml3)

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: modifiedHtml4,
      }}
    />
  )
}

export default InboxCarListing
