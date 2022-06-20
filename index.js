const api = (() => { // this will handle all the api request
    
    
    return {

    }
})();


const model = (() => { // The model will hold the state of the application
    return {

    }
})();


const view = (() => { // The view will handle the UI rendering of the page
    return {

    }
})();


const viewModel = ((model, view) => { // The View Model will handle all the functionallity of the page. 


    const bootstrap = () => { // This will help us subscribe to the model so we can preform the actions as needed. 

    }

    return {
        bootstrap
    }
})(model, view);


viewModel.bootstrap(); // this invoke the the bootstrap function