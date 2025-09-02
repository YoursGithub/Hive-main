import { FirestoreService } from "@/firebase/firestoreService";

export type ReportFormData = {
    fullName: string;
    appUpToDate: "yes" | "no" | "";
    issue: string;
    screenshots: File[];
}

export async function createReport({ fullName, appUpToDate, issue, screenshots }: ReportFormData) {

    const screenshotsUrl = await Promise.all(screenshots.map(img => FirestoreService.uploadFile(img, "ReportUs")))

    await FirestoreService.addDoc("ReportUs", {

        fullName: fullName,
        appUpToDate: appUpToDate,
        issue: issue,
        screenshots: screenshotsUrl

    });

}