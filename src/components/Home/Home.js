import React, { useEffect, useState } from 'react';




const Home = () => {

    // const [products, setProduct] = useState([])

    // useEffect(()=>{
    //     fetch("https://tiptopmartbd.com/api/all_branch")
    //     .then(Response => Response.json())
    //     .then(data => setProduct(data))
    // },[])
    // console.log(products);

 



    return (
        <div className='p-5 bg-white text-[#101623]'>
            <div className='mt-5'>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
                    <div
                        class="block rounded-lg bg-white shadow-lg border  border-[#6677FF]">

                        <div
                            class="border-b-2 border-[#6677FF] py-3 px-6 ">
                            <div className='flex justify-between text-[#6677FF]'>
                                <p>6 meses</p>
                                <p>Selected</p>
                            </div>
                        </div>
                        <div className='px-5'>
                            <div className='flex justify-between mt-5'>
                                <p>Valor</p>
                                <p>R$2.800,00</p>
                            </div>

                            <div className='flex justify-between mt-5'>
                                <p>Desconto</p>
                                <p>R$10.000,00</p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <p>Entrada</p>
                                <p>R$4.600,00</p>
                            </div>
                            <div className='flex justify-between mt-5 mb-5'>
                                <p>Parcelas</p>
                                <p>6x R$4.433,00</p>
                            </div>
                            <div className='divider'></div>
                            <div className='flex justify-between -mt-3 mb-5'>
                                <p>Total</p>
                                <p>R$26.598,00</p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="block   rounded-lg bg-white border  
                        border-[#E5E7EB]">

                        <div
                            class="border-b-2 border-[
                            #E5E7EB] py-3 px-6 ">
                            <div className='flex justify-between text-[#101623]'>
                                <p>12 meses</p>
                                
                            </div>
                        </div>
                        <div className='px-5'>
                            <div className='flex justify-between mt-5'>
                                <p>Valor</p>
                                <p>R$2.800,00</p>
                            </div>

                            <div className='flex justify-between mt-5'>
                                <p>Desconto</p>
                                <p>R$10.000,00</p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <p>Entrada</p>
                                <p>R$4.600,00</p>
                            </div>
                            <div className='flex justify-between mt-5 mb-5'>
                                <p>Parcelas</p>
                                <p>6x R$4.433,00</p>
                            </div>
                            <div className='divider'></div>
                            <div className='flex justify-between -mt-3 mb-5'>
                                <p>Total</p>
                                <p>R$26.598,00</p>
                            </div>
                        </div>
                    </div>



                    <div
                        class="block rounded-lg bg-white  border  border-[#E5E7EB]">

                        <div
                            class="border-b-2 border-[#E5E7EB] py-3 px-6 ">
                            <div className='flex justify-between text-[#101623]'>
                                <p>24 meses</p>
                               
                            </div>
                        </div>
                        <div className='px-5'>
                            <div className='flex justify-between mt-5'>
                                <p>Valor</p>
                                <p>R$2.800,00</p>
                            </div>

                            <div className='flex justify-between mt-5'>
                                <p>Desconto</p>
                                <p>R$10.000,00</p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <p>Entrada</p>
                                <p>R$4.600,00</p>
                            </div>
                            <div className='flex justify-between mt-5 mb-5'>
                                <p>Parcelas</p>
                                <p>6x R$4.433,00</p>
                            </div>
                            <div className='divider'></div>
                            <div className='flex justify-between -mt-3 mb-5'>
                                <p>Total</p>
                                <p>R$26.598,00</p>
                            </div>
                        </div>
                    </div>


                    <div
                        class="block  rounded-lg bg-white  border  border-[#E5E7EB]">

                        <div
                            class="border-b-2 border-[#E5E7EB] py-3 px-6 ">
                            <div className='flex justify-between text-[#101623]'>
                              <p>Um pagamento</p>
                            </div>
                        </div>
                        <div className='px-5'>
                            <div className='flex justify-between mt-5'>
                                <p>Valor</p>
                                <p>R$2.800,00</p>
                            </div>

                            <div className='flex justify-between mt-5'>
                                <p>Desconto</p>
                                <p>R$10.000,00</p>
                            </div>
                          
                            <div className='divider'></div>
                            <div className='flex justify-between -mt-3 mb-5'>
                                <p>Total</p>
                                <p>R$26.598,00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F7F8FF] rounded-md'>

                    <div className='grid grid-cols-2  lg:grid-cols-5 md:grid-cols-3 mt-10 p-5 gap-5'>
                        <div>
                            <p ><strong>Valor total</strong></p>
                            <p>R$10.000,00</p>
                        </div>
                        <div>
                            <p ><strong>CNPJ</strong></p>
                            <p>00. 000. 000/0001-00</p>
                        </div>
                        <div>
                            <p ><strong>Devendor</strong></p>
                            <p>RAISA PRODUTOS ELETRONICOS LTDA</p>
                        </div>
                        <div>
                            <p ><strong>Tatal de registros</strong></p>
                            <p>3</p>
                        </div>
                        <div>
                            <p ><strong>Unidade</strong></p>
                            <p>Procuradoria da Fazedna nacional do ceara</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mt-6  ">
                        <div className="w-60">
                            <label htmlFor="">
                                Email

                            </label>
                        </div>
                        <input


                            placeholder="Enter Email"
                            type="text"
                            className="input input-bordered mt-1 w-full rounded-md max-w-[300px] bg-white"
                        />
                        <div className="flex ">
                            <input className=" text-[#101623] px-5  lg:font-medium text-small lg:text-sm rounded-md my-7 cursor-pointer mr-2 btn btn-outline" type="submit" value="Back" />
                            <input className="bg-[#6677FF] text-white px-5  lg:font-medium text-small lg:text-sm rounded-md my-7 cursor-pointer mr-2" type="submit" value="submit" />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;