import { Request,Response } from "express";
export const HelloWorld = async(req:Request,res:Response)=>{
    res.status(200).json({
        message:"ok"
    });
}