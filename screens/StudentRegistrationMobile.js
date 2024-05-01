import * as React from "react";
import { Image, SafeAreaView, ScrollView, TextInput } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const StudentRegistrationMobile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }} stickyHeaderIndices={[1]}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.studentRegistrationMobile}>
          <Image
            style={[
              styles.studentRegistrationMobileChild,
              styles.calendarIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <TextInput
            style={[
              styles.studentRegistrationMobileItem,
              styles.studentChildLayout,
            ]}
          />
          <TextInput
            style={[
              styles.studentRegistrationMobileInner,
              styles.studentChildLayout,
            ]}
          />
          <View style={[styles.rectangleView, styles.studentChildLayout]} />
          <TextInput
            style={[
              styles.studentRegistrationMobileChild1,
              styles.studentChildLayout,
            ]}
          />
          <TextInput
            style={[
              styles.studentRegistrationMobileChild2,
              styles.studentChildLayout,
            ]}
          />
          <View
            style={[
              styles.studentRegistrationMobileChild3,
              styles.studentChildPosition,
            ]}
          />
          <Text style={[styles.studentName, styles.paidTypo]}>Student Name</Text>
          <Text style={[styles.paidAmount, styles.paidTypo]}>Paid Amount</Text>
          <Text
            style={[styles.paidDate, styles.paidTypo]}
          >{`Paid Date & Time`}</Text>
          <Text style={[styles.reference, styles.paidTypo]}>
            <Text style={styles.reference1}>Reference</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={[styles.whatsappNumber, styles.paidTypo]}>
            WhatsApp Number
          </Text>
          <Text style={[styles.receiptUpload, styles.paidTypo]}>
            {`Receipt upload`}
          </Text>
          <Image
            style={[styles.calendarIcon, styles.calendarIconLayout]}
            contentFit="cover"
            source={require("../assets/calendar.png")}
          />
          <View
            style={[
              styles.studentRegistrationMobileChild4,
              styles.studentChildPosition,
            ]}
          />
          <Image
            style={styles.menuIcon}
            contentFit="cover"
            source={require("../assets/menu.png")}
          />
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={styles.plusIcon}
            contentFit="cover"
            source={require("../assets/plus.png")}
          />
          <Text style={[styles.save, styles.studentFlexBox]}>Save</Text>
          <Text
            style={[styles.dashboardStudent, styles.studentFlexBox]}
          >{`Dashboard > Student Register`}</Text>
          <Text style={[styles.studentRegister, styles.studentFlexBox]}>
            Student Register
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  calendarIconLayout: {
    height: 50,
    position: "absolute",
  },
  studentChildLayout: {
    height: 59,
    width: 343,
  },
  studentChildPosition: {
    left: 17,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  paidTypo: {
    width: 184,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    left: 16,
    position: "absolute",
  },
  studentFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  studentRegistrationMobile: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 894,
    overflow: "hidden",
  },
  studentRegistrationMobileChild: {
    top: 16,
    left: 309,
    width: 50,
  },
  studentRegistrationMobileItem: {
    top: 112,
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_mini,
    width: 343,
    left: 16,
    position: "absolute",
    paddingHorizontal: 20,
  },
  studentRegistrationMobileInner: {
    top: 202,
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_mini,
    width: 343,
    left: 16,
    position: "absolute",
    paddingHorizontal: 20,
  },
  rectangleView: {
    top: 292,
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_mini,
    width: 343,
    left: 16,
    position: "absolute",
  },
  studentRegistrationMobileChild1: {
    top: 382,
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_mini,
    width: 343,
    left: 16,
    position: "absolute",
    paddingHorizontal: 20,
  },
  studentRegistrationMobileChild2: {
    top: 472,
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_mini,
    width: 343,
    left: 16,
    position: "absolute",
    paddingHorizontal: 20,
  },
  studentRegistrationMobileChild3: {
    top: 784,
    backgroundColor: Color.colorBlack,
    height: 59,
    width: 343,
  },
  studentName: {
    top: 92,
    color: Color.colorDarkslategray,
  },
  paidAmount: {
    top: 182,
    color: Color.colorDarkslategray,
  },
  paidDate: {
    top: 272,
    color: Color.colorDarkslategray,
  },
  reference1: {
    color: Color.colorDarkslategray,
  },
  text: {
    color: Color.colorBlack,
  },
  reference: {
    top: 362,
  },
  whatsappNumber: {
    top: 452,
    color: Color.colorDarkslategray,
  },
  receiptUpload: {
    top: 542,
    color: Color.colorDarkslategray,
  },
  calendarIcon: {
    top: 298,
    left: 314,
    width: 32,
  },
  studentRegistrationMobileChild4: {
    top: 567,
    borderStyle: "dashed",
    borderColor: "#e86c26",
    borderWidth: 5,
    width: 342,
    height: 186,
    backgroundColor: Color.colorLinen,
  },
  menuIcon: {
    top: 30,
    left: 319,
    width: 30,
    height: 22,
    position: "absolute",
  },
  ellipseIcon: {
    top: 599,
    left: 127,
    width: 123,
    height: 122,
    position: "absolute",
  },
  plusIcon: {
    top: 619,
    left: 147,
    width: 82,
    height: 82,
    position: "absolute",
  },
  save: {
    top: 806,
    left: 173,
    color: Color.colorLinen,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_smi,
  },
  dashboardStudent: {
    top: 24,
    fontSize: 11,
    color: "#f19866",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    left: 16,
  },
  studentRegister: {
    top: 34,
    left: 15,
    fontSize: 20,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorBlack,
  },
});

export default StudentRegistrationMobile;