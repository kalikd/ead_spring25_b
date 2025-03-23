// function getData(func){
//     setTimeout(function(){
//         const orders = [
//                 {id: 12, customer: 'Ahmed'},
//                 {id: 13, customer: 'Asad'},
//                 {id: 14, customer: 'Ali'},
//             ]
//         if(orders?.length){
//             func(orders, function(o){
//                 console.log(o)
//             })
//         }
//     }, 2000)
// }

// console.log('A');
// const data = getData(function(orders, func2){
//     console.log(orders)
//     const firstorder = orders?.length && orders[0]
//     setTimeout(function(){
//         const order = 'Order details of customer '+ firstorder.customer
//         if(order){
//             func2(order)
//         }
//     }, 1000)
// });

// console.log('C')
function getData(){
    return new Promise(function(resolve,reject){
         setTimeout(function(){
            const orders = [
                    {id: 12, customer: 'Ahmed'},
                    {id: 13, customer: 'Asad'},
                    {id: 14, customer: 'Ali'},
                ]
            if(false){
                resolve(orders)
            }
            else{
                reject('no data was found!')
            }
        }, 4000)
    })
}

//getData().then(orders => {
//         console.log('ORDERS: ', orders)
//         const firstorder = orders?.length && orders[0]
//         return new Promise(function(res, rej){
//             setTimeout(function(){
//             const order = 'Order details of customer '+ firstorder.customer
//             if(order){
//                 res(order)
//             }
//             else rej('No product was found!')
//         }, 1000)
//         })
// }).then(order => order).then(o => console.log(o)).catch(err => console.log('ERROR:', err))

function getOrderDetails(firstorder){
    return new Promise(function(res, rej){
                    setTimeout(function(){
                    const order = 'Order details of customer '+ firstorder.customer
                    if(order){
                        res(order)
                    }
                    else rej('No order was found!')
                }, 3000)
                })
}

function saveData(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const data = 'Data has been saved'
            if(data){
                resolve(data)
            }else{
                reject('Data could not be saved!')
            }
        }, 3000)
    })
}

function updateData(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const data = 'Data has been updated'
            if(data){
                resolve(data)
            }else{
                reject('Data could not be updated!')
            }
        }, 2000)
    })
}

(async function (){
    try{

        console.log('A')

        // const orders = await getData() // 4 seconds
        // const savedData = await saveData() // 3 seconds
        // const updatedData = await updateData() // 2 seconds

        const [orders, savedData, updatedData] = await Promise.allSettled([getData(), saveData(), updateData()])
        
        
        console.log('ORDERS: ', orders) // 4 seconds
        console.log('Saved Data: ', savedData)
        console.log('Updated Data: ', updatedData)

        // const firstorder = orders?.length && orders[0]

        // const orderDetails = await getOrderDetails(firstorder)

        // console.log(orderDetails)

        console.log('C')

    }
    catch(err){
        console.log('ERROR:', err)
    }
})()

