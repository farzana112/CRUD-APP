import Customer from "../model/model.js";

// create and save new customer

export const create = (req, res) => {
  // validate request

  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }

  // new customer
  const { name, email, gender,status } = req.body;
  const customer = new Customer({
    name,
    email,
    gender,
    status,
  });

//   save user in the database

customer.save()
    .then((data) => {
      res.send(data); // Send the saved data as response
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error occurred while creating the Customer" });
    });
};





//  retrieve and return all customers /retrieve and return a single user



export const find = (req, res) => {
if(req.query.id) {

const id=req.query.id;

Customer.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not Found"})
            }else {
                res.send(data)
            }
        })
        .catch(err=>{
        res.status(500).send({message :err.message || "Some error occurred while finding the Customer"})
            
        })

}else{
    Customer.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message :err.message || "Some error occurred while finding the Customers"})
    })
}

};





// update a new identified customer by customer id

export const update = (req, res) => {

    if(!req.body) {
        return res
               .status(400)
                .send({message:"data to be updated cannot be empty"})
    }

    const id=req.params.id ;
    Customer.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Not Found customer with id : ${id}`})
            }else {
                res.send(data)
            }
        })
        .catch(err=>{
            res.staus(500).send({message:"Error updating customer details"})
        })

};

//   delete a user

export const customer_delete = (req, res) => {

    const id=req.params.id

    Customer.findByIdAndDelete(id)
             .then(data=>{
                if(!data) {
                    res.status(404).send({message:` Can Not Delete customer with customer id : ${id}`})
                } else {
                    res.send({message:"user deleted"})
                }
             })
             .catch(err=>{
            res.staus(500).send({message:"Error deleting customer details"})

             })
};
