const globalReset = () => {

        navigator.clipboard.writeText(`*,
        *::before,
        *::after { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
        }`);}


const boxShadow = () => {
    navigator.clipboard.writeText(`
        .box-1{
        border-radius: 50px;
        background: #e0e0e0;
        box-shadow:  20px 20px 60px #bebebe,
                    -20px -20px 60px #ffffff;
        }  `)
}


    