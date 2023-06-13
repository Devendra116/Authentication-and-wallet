import { connect, connection } from 'mongoose'

const options: any = {
    useNewUrlParser: true
}

export const connectToDatabase = async () => {
    if (!connection.readyState) {
        console.log('Connecting to ', process.env.MONGO_URL as string)
        connect(process.env.MONGO_URL as string, options)
    }
}
