import { FirestoreService } from "@/firebase/firestoreService";

interface HiveCreator {
    description: string,
    email: string,
    favfood: string,
    name: string,
    phone: string,
    social: string,
    store: string,
    cuisines: string[]
}


export async function createHiveCreator(userId: string, { description,
    email,
    favfood,
    name,
    phone,
    social,
    store,
    cuisines
}: HiveCreator) {


    const user = await FirestoreService.getDoc("Users", userId)

    if (!user) {
        throw new Error("Invalid user id");
    }


    try {

        await FirestoreService.addDoc("Creators-Waitinglist", {
            description,
            email,
            favfood,
            name,
            phone,
            social,
            store,
            cuisines,
            userId
        })

        await FirestoreService.updateDoc("Users", userId, {
            isWaiting: true
        })

        console.log("hive creator created");


    } catch (error) {

        throw new Error("Failed to create hive creator")

    }

}