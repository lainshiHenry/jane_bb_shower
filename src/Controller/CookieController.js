export default class CookieController{
    _value;

    readCookies(cname){
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    writeFormCookies({numOfDays}){
        const d = new Date();
        d.setTime(d.getTime() + (numOfDays * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = 'isFormCompleted=true;' + expires + ";path=/";
    }

    getCookieValue(){
        return this.readCookies("isFormCompleted");
    }

    deleteCookies(){
        this.writeFormCookies({numOfDays: 0});
        console.log('deleted');
    }
}