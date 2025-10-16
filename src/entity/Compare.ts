import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('compare')
export class Compare {

    @PrimaryColumn("text")
    Id!: string;

    @Column("varchar", { length: 512, name: "main_title", nullable: true })
    mainTitle!: string;

    @Column("varchar", { length: 512, name: "Dynamic_Fields", nullable: true })
    dynamicFields!: string;

    @Column("varchar", { length: 512, name: "Document_Sign", nullable: true })
    documentSign!: string;

    @Column("varchar", { length: 512, name: "Onfra-X_App_Access", nullable: true })
    onfraXAppAccess!: string;

    @Column("varchar", { length: 512, name: "QR_Checkin", nullable: true })
    qrCheckin!: string;

    @Column("varchar", { length: 512, name: "Auto_Print", nullable: true })
    autoPrint!: string;

    @Column("varchar", { length: 512, name: "Invite1", nullable: true })
    invite1!: string;

    @Column("varchar", { length: 512, name: "Bulk_Invite", nullable: true })
    bulkInvite!: string;

    @Column("varchar", { length: 512, name: "Recurring_Checkin", nullable: true })
    recurringCheckin!: string;

    @Column("varchar", { length: 512, name: "Photo_Capture3", nullable: true })
    photoCapture3!: string;

    @Column("varchar", { length: 512, name: "Host_Approval", nullable: true })
    hostApproval!: string;

    @Column("varchar", { length: 512, name: "Custom_Filters", nullable: true })
    customFilters!: string;

    @Column("varchar", { length: 512, name: "Device_Custom_Message", nullable: true })
    deviceCustomMessage!: string;

    @Column("varchar", { length: 512, name: "Visitor_Pass_Customization", nullable: true })
    visitorPassCustomization!: string;

    @Column("varchar", { length: 512, name: "Auto_Checkout", nullable: true })
    autoCheckout!: string;

    @Column("varchar", { length: 512, name: "Business_Card_Scanning", nullable: true })
    businessCardScanning!: string;

    @Column("varchar", { length: 512, name: "Device_Color_Customization", nullable: true })
    deviceColorCustomization!: string;

    @Column("varchar", { length: 512, name: "Daily_Report", nullable: true })
    dailyReport!: string;

    @Column("varchar", { length: 512, name: "Weekly_Report", nullable: true })
    weeklyReport!: string;

    @Column("varchar", { length: 512, name: "Monthly_Report", nullable: true })
    monthlyReport!: string;

    @Column("varchar", { length: 512, name: "Yearly_Report", nullable: true })
    yearlyReport!: string;

    @Column("varchar", { length: 512, name: "OTP_Verification", nullable: true })
    otpVerification!: string;

    @Column("varchar", { length: 512, name: "QR_Checkout", nullable: true })
    qrCheckout!: string;

    @Column("varchar", { length: 512, name: "National-ID_Scan", nullable: true })
    nationalIdScan!: string;

    @Column("varchar", { length: 512, name: "AI-QR_Image", nullable: true })
    aiQrImage!: string;

    @Column("varchar", { length: 512, name: "ID-Print_Templates", nullable: true })
    idPrintTemplates!: string;

    @Column("varchar", { length: 512, name: "Visitor_Host-Otp_Verify", nullable: true })
    visitorHostOtpVerify!: string;

    @Column("varchar", { length: 512, name: "Visitor_Alert_Notification", nullable: true })
    visitorAlertNotification!: string;

    @Column("varchar", { length: 512, name: "Visitor_Quick_Checkin", nullable: true })
    visitorQuickCheckin!: string;

    @Column("varchar", { length: 512, name: "Appointments/Pre-Register", nullable: true })
    appointmentsPreRegister!: string;

    @Column("varchar", { length: 512, name: "Visitor_QR-Scan_for_Secondary_Checkins", nullable: true })
    visitorQrScanForSecondaryCheckins!: string;

    @Column("varchar", { length: 512, name: "Visitor_Photo_Upload", nullable: true })
    visitorPhotoUpload!: string;

    @Column("varchar", { length: 512, name: "Multi_Approval_System", nullable: true })
    multiApprovalSystem!: string;

    @Column("varchar", { length: 512, name: "Host_Notification1", nullable: true })
    hostNotification1!: string;

    @Column("varchar", { length: 512, name: "Visitor_Welcome_Message", nullable: true })
    visitorWelcomeMessage!: string;

    @Column("varchar", { length: 512, name: "Employee_Checkins", nullable: true })
    employeeCheckins!: string;

    @Column("varchar", { length: 512, name: "Employee_Location_Tracker", nullable: true })
    employeeLocationTracker!: string;

    @Column("varchar", { length: 512, name: "Easy_Recruitment", nullable: true })
    easyRecruitment!: string;

    @Column("varchar", { length: 512, name: "Attendance_Tracker", nullable: true })
    attendanceTracker!: string;

    @Column("varchar", { length: 512, name: "Photo_Capture4", nullable: true })
    photoCapture4!: string;

    @Column("varchar", { length: 512, name: "Leaves_Tracker", nullable: true })
    leavesTracker!: string;

    @Column("varchar", { length: 512, name: "Employee_Quick_Checkin", nullable: true })
    employeeQuickCheckin!: string;

    @Column("varchar", { length: 512, name: "Employee_Geo_Fencing", nullable: true })
    employeeGeoFencing!: string;

    @Column("varchar", { length: 512, name: "Employee_Report_pdf/excel2", nullable: true })
    employeeReportPdfExcel2!: string;

    @Column("varchar", { length: 512, name: "Mobile_for_Checkin", nullable: true })
    mobileForCheckin!: string;

    @Column("varchar", { length: 512, name: "Mobile_for_Leave_Request", nullable: true })
    mobileForLeaveRequest!: string;

    @Column("varchar", { length: 512, name: "Report_pdf/excel1", nullable: true })
    reportPdfExcel1!: string;

    @Column("varchar", { length: 512, name: "Member_Passes_with_restrictions", nullable: true })
    memberPassesWithRestrictions!: string;

    @Column("varchar", { length: 512, name: "Member_Approval_Flow", nullable: true })
    memberApprovalFlow!: string;

    @Column("varchar", { length: 512, name: "Member_Checkin", nullable: true })
    memberCheckin!: string;

    @Column("varchar", { length: 512, name: "Photo_Capture1", nullable: true })
    photoCapture1!: string;

    @Column("varchar", { length: 512, name: "FlexiPass_Quick_Checkin", nullable: true })
    flexipassQuickCheckin!: string;

    @Column("varchar", { length: 512, name: "Mobile_for_host_verification1", nullable: true })
    mobileForHostVerification1!: string;

    @Column("varchar", { length: 512, name: "Easy_Recording_Process", nullable: true })
    easyRecordingProcess!: string;

    @Column("varchar", { length: 512, name: "Digital_Delivery_Log", nullable: true })
    digitalDeliveryLog!: string;

    @Column("varchar", { length: 512, name: "Secure_Pickup", nullable: true })
    securePickup!: string;

    @Column("varchar", { length: 512, name: "Photo_Capture2", nullable: true })
    photoCapture2!: string;

    @Column("varchar", { length: 512, name: "Mobile_for_host_verification2", nullable: true })
    mobileForHostVerification2!: string;

    @Column("varchar", { length: 512, name: "Host_Notification2", nullable: true })
    hostNotification2!: string;

    @Column("varchar", { length: 512, name: "Report_pdf/excel3", nullable: true })
    reportPdfExcel3!: string;

    @Column("varchar", { length: 512, name: "Rooms", nullable: true })
    rooms!: string;

    @Column("varchar", { length: 512, name: "Meeting", nullable: true })
    meeting!: string;

    @Column("varchar", { length: 512, name: "Smart_Filters", nullable: true })
    smartFilters!: string;

    @Column("varchar", { length: 512, name: "Calendar_View", nullable: true })
    calendarView!: string;

    @Column("varchar", { length: 512, name: "External_Invite", nullable: true })
    externalInvite!: string;

    @Column("varchar", { length: 512, name: "Conflict_Meetings_Config", nullable: true })
    conflictMeetingsConfig!: string;

    @Column("varchar", { length: 512, name: "Meeting_Approvals", nullable: true })
    meetingApprovals!: string;

    @Column("varchar", { length: 512, name: "Recurring_Meeting", nullable: true })
    recurringMeeting!: string;

    @Column("varchar", { length: 512, name: "MoM", nullable: true })
    mom!: string;

    @Column("varchar", { length: 512, name: "Mobile_For_Users", nullable: true })
    mobileForUsers!: string;

    @Column("varchar", { length: 512, name: "Google_Sync", nullable: true })
    googleSync!: string;

    @Column("varchar", { length: 512, name: "Outlook_Sync", nullable: true })
    outlookSync!: string;

    @Column("varchar", { length: 512, name: "External_Meeting_Link_Generation", nullable: true })
    externalMeetingLinkGeneration!: string;

    @Column("varchar", { length: 512, name: "Room/Meeting_Displays", nullable: true })
    roomMeetingDisplays!: string;

    @Column("varchar", { length: 512, name: "Walk-In_Booking", nullable: true })
    walkInBooking!: string;

    @Column("varchar", { length: 512, name: "Multi-Language_Secure_Display", nullable: true })
    multiLanguageSecureDisplay!: string;

    @Column("varchar", { length: 512, name: "Passes", nullable: true })
    passes!: string;

    @Column("varchar", { length: 512, name: "Checkins", nullable: true })
    checkins!: string;

    @Column("varchar", { length: 512, name: "Dynamic_Items", nullable: true })
    dynamicItems!: string;

    @Column("varchar", { length: 512, name: "Pass_Approval_Flow", nullable: true })
    passApprovalFlow!: string;

    @Column("varchar", { length: 512, name: "Pass_Print_Template", nullable: true })
    passPrintTemplate!: string;

    @Column("varchar", { length: 512, name: "Material_Checkin_Photo_Capture", nullable: true })
    materialCheckinPhotoCapture!: string;

    @Column("varchar", { length: 512, name: "Report_pdf/excel4", nullable: true })
    reportPdfExcel4!: string;

    @Column("varchar", { length: 512, name: "Counters", nullable: true })
    counters!: string;

    @Column("varchar", { length: 512, name: "Tokens", nullable: true })
    tokens!: string;

    @Column("varchar", { length: 512, name: "Multi_Secure_Display_View", nullable: true })
    multiSecureDisplayView!: string;

    @Column("varchar", { length: 512, name: "Real_Time_Updates1", nullable: true })
    realTimeUpdates1!: string;

    @Column("varchar", { length: 512, name: "Staff_Feedback", nullable: true })
    staffFeedback!: string;

    @Column("varchar", { length: 512, name: "Report_(Pdf/Excel)", nullable: true })
    reportPdfExcel!: string;

    @Column("varchar", { length: 512, name: "Visitor_Module_Integration", nullable: true })
    visitorModuleIntegration!: string;

    @Column("varchar", { length: 512, name: "Notifications", nullable: true })
    notifications!: string;

    @Column("varchar", { length: 512, name: "Multi_Layout_Secure_Displays", nullable: true })
    multiLayoutSecureDisplays!: string;

    @Column("varchar", { length: 512, name: "Multi_Widgets", nullable: true })
    multiWidgets!: string;

    @Column("varchar", { length: 512, name: "Image_Slideshows", nullable: true })
    imageSlideshows!: string;

    @Column("varchar", { length: 512, name: "Real_Time_Updates2", nullable: true })
    realTimeUpdates2!: string;

    @Column("varchar", { length: 255, name: "page_title", nullable: true })
    pageTitle!: string;

    @Column("text", { name: "page_description", nullable: true })
    pageDescription!: string;

    @Column("varchar", { length: 2083, name: "img_url", nullable: true })
    imgUrl!: string;

    @Column("varchar", { length: 255, name: "Title", nullable: true })
    title!: string;

    @Column("varchar", { length: 255, name: "slug", nullable: true })
    slug!: string;
}
