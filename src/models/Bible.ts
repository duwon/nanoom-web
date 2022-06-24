import {
  FirestoreDataConverter,
  Timestamp,
  doc,
  setDoc,
  collection, query, getDocs, deleteDoc,
  orderBy, startAfter, limit, QueryDocumentSnapshot, where
} from 'firebase/firestore'
import { db } from 'boot/firebase'
import { date } from 'quasar'

export class BibleRecorde {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    readonly email: string,
    readonly name: string,
    readonly title: string,
    readonly memo: string,
    readonly filename: string,
    readonly savedFilename: string,
    readonly createDate?: string | undefined,
    readonly createdAt?: Date | undefined,
    readonly updatedAt?: Date | undefined
  ) {
    this.email = email
    this.name = name
    this.title = title
    this.memo = memo
    this.filename = filename
    this.savedFilename = savedFilename
    this.createDate = createDate
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  collectionID () {
    let dateString = date.formatDate(Date(), 'YYYY-MM-DD')
    if (this.createdAt instanceof Timestamp) {
      dateString = date.formatDate(this.createdAt, 'YYYY-MM-DD')
    }

    return this.email + '-' + dateString + '-' + this.title
  }
}

const converter: FirestoreDataConverter<BibleRecorde> = {
  toFirestore (model: BibleRecorde) {
    return {
      email: model.email,
      name: model.name,
      title: model.title,
      memo: model.memo,
      filename: model.filename,
      savedFilename: model.savedFilename,
      createDate: date.formatDate(Date(), 'YYYY-MM-DD'),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  },
  fromFirestore (snapshot) {
    const data = snapshot.data()
    return new BibleRecorde(
      data.email,
      data.name,
      data.title,
      data.memo,
      data.filename,
      data.savedFilename,
      data.createDate,
      data.createdAt instanceof Timestamp ? data.createdAt.toDate() : undefined,
      data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : undefined
    )
  }
}
const tableName = 'bibles'

export const setBibleRecorde = async (data: BibleRecorde) => {
  const ref = doc(db, tableName, data.collectionID()).withConverter(converter)
  return setDoc(ref, data)
}

let lastVisible: QueryDocumentSnapshot<BibleRecorde>
export const getBibleRecorde = async (email: string) => {
  const ref = collection(db, tableName).withConverter(converter)
  const q = query(ref, where('email', '==', email), orderBy('createdAt', 'desc'), limit(7))
  const docs = await getDocs(q)

  lastVisible = docs.docs[docs.docs.length - 1]
  return docs
}

export const getBibleRecordeDate = async (dateSelect: string) => {
  const ref = collection(db, tableName).withConverter(converter)

  const q = query(ref, where('createDate', '==', dateSelect), orderBy('name', 'asc'))
  const docs = await getDocs(q)

  return docs
}

export const getBibleRecordeDate2 = async (email: string, dateSelect: string) => {
  const ref = collection(db, email).withConverter(converter)

  const q = query(ref, where('createDate', '==', dateSelect))
  const docs = await getDocs(q)

  return docs
}

export const getBibleRecordeNext = async (email: string) => {
  const ref = collection(db, tableName).withConverter(converter)
  const q = query(ref, where('email', '==', email), orderBy('createdAt', 'desc'), startAfter(lastVisible), limit(7))
  const docs = await getDocs(q)
  lastVisible = docs.docs[docs.docs.length - 1]
  return docs
}

export const updateBibleRecord = (id: string, memo: string) => {
  const ref = doc(db, tableName, id).withConverter(converter)
  return setDoc(ref, { memo }, { merge: true })
}

export const deleteBibleRecord = async (data: BibleRecorde) => {
  const ref = doc(db, tableName, data.collectionID())
  const result = await deleteDoc(ref)
  console.log(result)
  return result
}
