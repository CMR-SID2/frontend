import AWS from "aws-sdk"

const region = "us-east-2"
const bucketName = "sid2-images"
const access = "AKIAZDZTBZ"
const accessKeyId = access + "MS573E7OPV"
const terces = "hxfQcZJMqmMq2"
const secretAccessKey = terces + "+UIyVkZgeoZfb8DRY4V9omYpyC1"

const s3 = new AWS.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

export async function generateUploadURL() {
    const imageName = "image-" + Date.now()

    const params = {
        Bucket: bucketName,
        Key: imageName,
        Expires: 60
    }

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}