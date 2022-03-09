import axios from 'axios'
import { m } from 'framer-motion';
import Papa from 'papaparse'

import { Product } from "./types";

export default {
    list: async (): Promise<Product[]> => {
        return axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7IoXKs-J7awJj0WTR7giKzsd-REHNxlHvWFhb6yJGdQPtBb-IRlEFCzu46byLcLk13Oo53trrZyoa/pub?output=csv', 
        {
            responseType: 'blob'
        }
        )
        .then( res => 
            new Promise<Product[]>((resolve, reject) => {
                Papa.parse(res.data, {
                    header: true,
                    complete: (results) => resolve(results.data as Product[]),
                    error: (error) => reject(error.message),
                })
            }),
        )
    }
}