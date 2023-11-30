import axios from 'axios';

export const homeRoutes = (req, res) => {
    
       
            res.render('index');
        
        
};

export const add_user= (req ,res) => {

    res.render('add_user')


}


export const update_user= (req ,res) => {

    res.render('update_user')

    
}