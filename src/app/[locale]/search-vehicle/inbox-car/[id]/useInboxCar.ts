import React from 'react'

type Props = {}

export interface CarData {
  vin: string
  mileage: string
  engine: string
  fuelType: string
  transmission: string
  interior: string
  cylinder: string
  drive: string
  isDamaged: string
  isPainted: string
  isDrivable: string
}

const useInboxCar = () => {
  function getMainImageSrc(htmlString: string) {
    if (typeof window === 'undefined') {
      return null
    }
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlString, 'text/html')
    const imgElement = doc.querySelector(
      'img[alt="Main photo"]'
    ) as HTMLImageElement
    return imgElement ? imgElement.src : null
  }

  function getTitle(inputString: string) {
    const result = inputString.replace('Fwd: Details for ', '')
    return result
  }

  const extractData = (html: string) => {
    const div = document.createElement('div')
    div.innerHTML = html
    const rows = div.querySelectorAll('tr')
    const targetRow = rows[5]
    if (!targetRow) return {}
    const damageRow = rows[7]

    const data: CarData = {
      vin: targetRow.querySelectorAll('td')[1]?.innerText || '',
      mileage: targetRow.querySelectorAll('td')[4]?.innerText || '',
      engine: targetRow.querySelectorAll('td')[10]?.innerText || '',
      fuelType: targetRow.querySelectorAll('td')[13]?.innerText || '',
      transmission: targetRow.querySelectorAll('td')[15]?.innerText || '',
      interior: targetRow.querySelectorAll('td')[18]?.innerText || '',
      cylinder: targetRow.querySelectorAll('td')[11]?.innerText || '',
      drive: targetRow.querySelectorAll('td')[7]?.innerText || '',
      isDamaged: damageRow.querySelectorAll('td')[3]?.innerText || '',
      isPainted: damageRow.querySelectorAll('td')[5]?.innerText || '',
      isDrivable: damageRow.querySelectorAll('td')[7]?.innerText || '',
    }

    return data as CarData
  }

  const formatNumber = (number: number) => {
    const formattedNumber = new Intl.NumberFormat().format(number)
    return formattedNumber
  }

  return { extractData, getTitle, getMainImageSrc, formatNumber }
}

export default useInboxCar
