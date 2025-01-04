import React from 'react'
import Image from 'next/image'
import pdfIcon from '@/assets/icons/pdf.svg'

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from '@react-pdf/renderer'

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 12,
    lineHeight: 1.5,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 32,
    backgroundColor: 'black',
  },
  logoText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 10,
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    textAlign: 'right',
  },
  priceSection: {
    borderTop: '1px solid #000',
    paddingTop: 10,
    marginTop: 10,
  },
})

// Define the PDF document
const InvoicePDF = ({ data }: { data: any }) => {
  const {
    id,
    createdAt,
    manufacturer,
    manufactureYear,
    model,
    vin,
    exactAddress,
    isInsured,
    carCategory,
    mileage,
    carCost,
    transportationCost,
    receiver,
    // logoUrl, // Pass the company logo URL here
  } = data

  return (
    <Document>
      <Page style={styles.page}>
        {/* Header with Logo */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>DUX</Text>
          </View>
          <Text style={styles.title}>Car Invoice</Text>
        </View>

        {/* General Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>ID:</Text>
            <Text style={styles.value}>{id}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Created At:</Text>
            <Text style={styles.value}>
              {new Date(createdAt).toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Manufacturer:</Text>
            <Text style={styles.value}>{manufacturer}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Manufacture Year:</Text>
            <Text style={styles.value}>{manufactureYear}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Model:</Text>
            <Text style={styles.value}>{model}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>VIN:</Text>
            <Text style={styles.value}>{vin}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Exact Address:</Text>
            <Text style={styles.value}>{exactAddress}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Car Category:</Text>
            <Text style={styles.value}>{carCategory}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Mileage:</Text>
            <Text style={styles.value}>{mileage} km</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Is Insured:</Text>
            <Text style={styles.value}>{isInsured ? 'Yes' : 'No'}</Text>
          </View>
        </View>

        {/* Receiver Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Receiver Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{receiver.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Contact:</Text>
            <Text style={styles.value}>{receiver.contact}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{receiver.email}</Text>
          </View>
        </View>

        {/* Price Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Car Cost:</Text>
            <Text style={styles.value}>${carCost.toFixed(2)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Transportation Cost:</Text>
            <Text style={styles.value}>
              ${parseFloat(transportationCost).toFixed(2)}
            </Text>
          </View>
          <View style={[styles.row, styles.priceSection]}>
            <Text style={styles.label}>Total Cost:</Text>
            <Text style={styles.value}>
              ${(carCost + parseFloat(transportationCost)).toFixed(2)}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

// Button to download the PDF
const DownloadButton = ({ data }: { data: any }) => (
  <PDFDownloadLink
    document={<InvoicePDF data={data} />}
    fileName={`car_invoice_${data.id}.pdf`}
  >
    {/* @ts-ignore */}
    {({ loading }) =>
      loading ? 'Generating PDF...' : <Image src={pdfIcon} alt='pdf icon' />
    }
  </PDFDownloadLink>
)

export default DownloadButton
