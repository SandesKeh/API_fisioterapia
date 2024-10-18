import jwt from 'jsonwebtoken'
const KEY = '===!AutonomoAPI!=='



export function gerarToken(user) {
    return jwt.sign(user, KEY);
}


export function autenticar(req, resp, next) {
    return autenticacao(req, resp, next);
}


export function autenticacao(req, resp, next) {
    try {
    let chaveToken = req.headers['acesso-ao-token'];

    if (chaveToken === undefined) {
        chaveToken = req.query['acesso-ao-token']
        
        let acesso = jwt.verify(chaveToken, KEY)
        req.user = acesso;


        next();
    }
    
    }catch (e) {
        resp.status(401).end();
    }
}

