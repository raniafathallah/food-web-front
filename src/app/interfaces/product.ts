export interface Product {
     _id: string,
     user: string,
     name: string,
     image: string,
     time: number,
     portion: number,
     brand: string,
     category: string,
     description: string,
     rating: number,
     numReviews: number,
     price: number,
     countInStock: never,
     createdAt: Date,
     updatedAt: Date,

}

export interface UpdatedProduct {
     name: string,
     description: string,
     price: string,
     category: string,
     img?: string,
     time: Number,
     portion: Number,
}

export interface NewProduct {
     user: string,
     name: string,
     description: string, price: string,
     category: string, 
     img?: File,
     time:Number,
     portion:Number,
     image:string
   } 



