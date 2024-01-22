/* eslint-disable react/prop-types */
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

const ReceiptPage = ({ data, formattedDate, time, reference }) => {
  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document>
          <Page size="A4" style={styles.page}>
            <Image alt="" src="/images/success.png" style={styles.img} />
            <Text style={styles.header}>PAYMENT CONFIRMATION SLIP</Text>
            <Text style={styles.header2}>Your Payment was successful</Text>
            <Text style={styles.header3}>
              ===== x ===== x ===== x ===== x ===== x ===== x ===== x =====
            </Text>

            <View style={styles.container}>
              <Text style={styles.content}>
                <Text style={styles.bold}>Name</Text>
                {"\n"}
                {capitalizeFirstLetter(data?.first_name)}{" "}
                {capitalizeFirstLetter(data?.last_name)}
              </Text>
              <Text style={styles.content2}>
                <Text style={styles.bold}>Date</Text>
                {"\n"}
                {formattedDate}
              </Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.content}>
                <Text style={styles.bold}>Program</Text>
                {"\n"}
                {data?.field_of_study}
              </Text>
              <Text style={styles.content2}>
                <Text style={styles.bold}>Time</Text>
                {"\n"}
                {time}
              </Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.content}>
                <Text style={styles.bold}>Duration</Text>
                {"\n"}
                {data?.duration}
              </Text>
              <Text style={styles.content2}>
                <Text style={styles.bold}>Branch</Text>
                {"\n"}
                Jakande Gate
              </Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.content}>
                <Text style={styles.bold}>Transaction ID</Text>
                {"\n"}
                <Text style={styles.bold2}> {reference}</Text>
              </Text>
              <Text style={styles.content2}>
                <Text style={styles.bold}>Amount</Text>
                {"\n"}
                <Text style={styles.bold2}> {data?.amount_paid}</Text>
              </Text>
            </View>
            <Text style={styles.content3}>
              Kindly Go to your chosen branch with this slip printed
            </Text>
            <Image
              alt=""
              src="/images/Receipt Footer.png"
              style={styles.img2}
            />
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default ReceiptPage;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: "auto",
    marginBottom: 20,
  },
  img2: {
    width: "100%",
    height: "auto",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  page: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#179100",
  },
  header2: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#179100",
    marginTop: 20,
  },
  header3: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  content: {
    width: "60%",
    fontSize: 16,
    marginBottom: 5,
  },
  content2: {
    width: "40%",
    fontSize: 16,
    marginBottom: 5,
  },
  content3: {
    fontSize: 10,
    marginBottom: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  bold2: {
    fontWeight: "bold",
    color: "#179100",
  },
  container: {
    width: "100%",
    // paddingRight: 20,
    paddingLeft: 40,
    flexDirection: "row",
    marginBottom: 20,
    // justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#ffbb00",
    color: "#000103",
    padding: 5,
    fontSize: 16,
  },
});
