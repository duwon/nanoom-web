import {
  FirestoreDataConverter,
  Timestamp,
  doc,
  setDoc,
  collection, query, getDocs, deleteDoc,
  orderBy, startAfter, limit, QueryDocumentSnapshot
} from 'firebase/firestore'
import { db } from 'boot/firebase'
import { date } from 'quasar'

export class BibleRecorde {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    readonly name: string,
    readonly title: string,
    readonly memo: string,
    readonly filename: string,
    readonly savedFilename: string,
    readonly createdAt?: Date | undefined,
    readonly updatedAt?: Date | undefined
  ) { }
}

const converter: FirestoreDataConverter<BibleRecorde> = {
  toFirestore (model: BibleRecorde) {
    return {
      name: model.name,
      title: model.title,
      memo: model.memo,
      filename: model.filename,
      savedFilename: model.savedFilename,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  },
  fromFirestore (snapshot) {
    const data = snapshot.data()
    return new BibleRecorde(
      data.name,
      data.title,
      data.memo,
      data.filename,
      data.savedFilename,
      data.createdAt instanceof Timestamp ? data.createdAt.toDate() : undefined,
      data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : undefined
    )
  }
}

export const setBibleRecorde = async (data: BibleRecorde) => {
  const collectionID = date.formatDate(Date(), 'YYYYMMDD-') + data.title
  const ref = doc(db, data.name, collectionID).withConverter(converter)
  return setDoc(ref, data)
}

let lastVisible: QueryDocumentSnapshot<BibleRecorde>
export const getBibleRecorde = async (email: string) => {
  const ref = collection(db, email).withConverter(converter)

  const q = query(ref, orderBy('createdAt', 'desc'), limit(7))
  const docs = await getDocs(q)

  lastVisible = docs.docs[docs.docs.length - 1]
  // console.log(q)
  // console.log(docs)
  return docs
}

export const getBibleRecordeNext = async (email: string) => {
  const ref = collection(db, email).withConverter(converter)
  const q = query(ref, orderBy('createdAt', 'desc'), startAfter(lastVisible), limit(7))
  const docs = await getDocs(q)
  lastVisible = docs.docs[docs.docs.length - 1]
  return docs
}

export const updateBibleRecord = (id: string, memo: string) => {
  const ref = doc(db, 'bible', id).withConverter(converter)
  return setDoc(ref, { memo }, { merge: true })
}

export const deleteBibleRecord = async (data: BibleRecorde) => {
  const collectionID = date.formatDate(Date(), 'YYYYMMDD-') + data.title
  const ref = doc(db, data.name, collectionID)
  const result = await deleteDoc(ref)
  console.log(result)
  return result
}
