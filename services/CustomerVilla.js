var customers =[
    {id:'099090',name:"John Doe",email:"john@gmail.com", phone:"5433233232", address:"India",city:"Bangalore"}
   
  ];


export var getCustomers = ()=>{
    return customers;
}

export var addCustomer = (customer)=>{
    customer.id = Date.now()+'r';
    customers.push(customer);
}

export var deleteCustomer = (id) =>{
    customers = customers.filter((item)=>(item.id!=id));
  }

export var getCustomerById = (id) =>{
    var list = customers.filter((item)=>(item.id==id));
    if(list.length > 0){
        return list[0];
    }else{
        return {}
   }
}

export var updateCustomer = (customer) =>{
    var list = customers.filter((item)=>(item.id==customer.id));
    if(list.length > 0){
         list[0].name = customer.name;
         list[0].email = customer.email;
         list[0].phone = customer.phone;
         list[0].address = customer.address;
         list[0].city = customer.city;
    }
}