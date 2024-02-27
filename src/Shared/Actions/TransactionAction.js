const add = (transation) => {

    return {

        type: 'ADD',
        payload: transation
    }
}

export { add }