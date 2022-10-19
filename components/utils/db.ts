import TypeDb from "../../types/TypeDb";

const db:Array<TypeDb> = [
    {
        id: 1,
        type: "pix",
        amount: 100,
        date: "2022-10-05",
        description: "Pizza Delivery",
        category: "Food",
        operation: "credit"
    },
    {
        id: 2,
        type: "ted",
        amount: 150000,
        date: "2022-10-10",
        description: "Sálario",
        category: "Salary",
        operation: "credit"
    },
    {
        id: 3,
        type: "debit",
        amount: 40,
        date: "2022-10-09",
        description: "Gasolina",
        category: "house",
        operation: "debit"
    },
    {
        id: 4,
        type: "pix",
        amount: 200,
        date: "2022-10-19",
        description: "",
        category: "petshop",
        operation: "debit"
    },
    {
        id: 5,
        type: "debit",
        amount: 250,
        date: "2022-10-18",
        description: "Japonese Food",
        category: "Food",
        operation: "debit"
    },
    {
        id: 6,
        type: "pix",
        amount: 100,
        date: "2022-10-01",
        description: "Payment",
        category: "salary extra",
        operation: "credit"
    }

]

export default db;