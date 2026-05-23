import { api } from 'app/api'
import {
  BucketListType,
  DataPointListType,
  S3ObjectListType,
  S3ObjectType,
} from 'app/types/createS3.schema'
import { EC2Instance, EC2InstancesResponse } from 'app/types/ec2Types'

export class S3Service {
  constructor() {}

  async getAllS3(): Promise<any> {
    const { data } = await api.get('/s3/full-map', {
      params: { regionId: 1 },
    })
    // console.log('respuesta de ec2', data.body)
    return data
  }

  async getBucketS3(bucketName: string): Promise<S3ObjectListType> {
    const { data } = await api.get(`/s3/buckets/${bucketName}/objects`, {
      params: { regionId: 1 },
    })
    // console.log('respuesta de ec2', data.body)
    return data
  }

  async ObjectDetails(
    bucketName: string,
    objectKey: string,
  ): Promise<S3ObjectType> {
    const { data } = await api.get(
      `/s3/buckets/${bucketName}/objects/${objectKey}`,
      {
        params: { regionId: 1 },
      },
    )
    return data.body
  }

  async getSizeMetricsBucketS3(bucketName: string): Promise<DataPointListType> {
    const { data } = await api.get(`/s3/buckets/${bucketName}/metrics/size`, {
      params: { regionId: 1 },
    })
    // console.log('respuesta de ec2', data.body)
    return data
  }

  async getCountMetricsBucketS3(
    bucketName: string,
  ): Promise<DataPointListType> {
    const { data } = await api.get(
      `/s3/buckets/${bucketName}/metrics/object-count`,
      {
        params: { regionId: 1 },
      },
    )
    // console.log('respuesta de ec2', data.body)
    return data
  }
}
