import {
    signUp,
    signIn,
    signOut,
    signInGoogle,
    signInFacebook,
} from '../model/model-authentication.js'

// REGISTRAR USUARIO
export const registerNewUser = (emailRegister, passwordRegister) => {
    signUp(emailRegister, passwordRegister)
        .then(userCredential => {
            console.log('registradx', userCredential);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
};

// INICIAR SESIÓN
export const authSignIn = (emailLogin, passwordLogin) => {
    signIn(emailLogin, passwordLogin)
        .then((userCredential) => {
            console.log('Usted ya ingreso, ya esta logeadx', userCredential);
            window.location.hash = '#/home';
        })
        .catch(function (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}

// AUTENTICACIÓN CON GOOGLE
export const authSignInGoogle = () => {
    signInGoogle()
        .then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            window.location.hash = '#/home';
            console.log('google Sign In');
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log('Error Google Prueba');
            console.log(errorCode);
            console.log(errorMessage);
            console.log(email);
            console.log(credential);
        });
}

// AUTENTICACIÓN CON FACEBOOK
export const authSignInFacebook = () => {
    signInFacebook()
        .then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            window.location.hash = '#/home';
            console.log('Facebook Sign In');
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log('Error Facebook Prueba');
            console.log(errorCode);
            console.log(errorMessage);
            console.log(email);
            console.log(credential);
        });
}

export const signOutUser = () => {
    signOut()
        .then(resp => {
            console.log('Saliendo...!');
        })
        .catch((error) => {
            console.log(error);
        })
}