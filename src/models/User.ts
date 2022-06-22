import {
  FirestoreDataConverter,
  Timestamp,
  doc, getDoc,
  setDoc,
  collection, query, getDocs,
  orderBy, where
} from 'firebase/firestore'
import { db } from 'boot/firebase'

export class UserList {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    readonly name: string,
    readonly title: string,
    readonly nickname: string,
    readonly email: string,
    readonly phoneNumber: string | null,
    readonly createdAt?: Date | undefined
  ) {
    this.name = name
    this.title = title
    this.nickname = nickname
    this.email = email
    this.createdAt = createdAt
    this.phoneNumber = phoneNumber
  }

  collectionID () {
    return this.email
  }
}

const converter: FirestoreDataConverter<UserList> = {
  toFirestore (model: UserList) {
    return {
      name: model.name,
      title: model.title,
      nickname: model.nickname,
      email: model.email,
      phoneNumber: model.phoneNumber,
      createdAt: new Date()
    }
  },
  fromFirestore (snapshot) {
    const data = snapshot.data()
    return new UserList(
      data.name,
      data.title,
      data.nickname,
      data.email,
      data.phoneNumber,
      data.createdAt instanceof Timestamp ? data.createdAt.toDate() : undefined
    )
  }
}

const tableName = 'users'

export const addUser = async (data: UserList) => {
  // const collectionID = data.name + '-' + data.email
  const ref = doc(db, tableName, data.collectionID()).withConverter(converter)
  return setDoc(ref, data)
}

export const getUser = async (email: string) => {
  const ref = collection(db, tableName).withConverter(converter)

  const q = query(ref, where('email', '==', email))
  const docs = await getDocs(q)

  return docs
}

export const checkUser = async (email: string) => {
  const ref = doc(db, tableName, email).withConverter(converter)
  const docSnap = await getDoc(ref)
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return null
  }
}

export const getAllUser = async () => {
  const ref = collection(db, tableName).withConverter(converter)

  const q = query(ref, orderBy('name', 'asc'))
  const docs = await getDocs(q)

  return docs
}
