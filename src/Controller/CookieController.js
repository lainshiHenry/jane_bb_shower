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

    writeFormCookies({numOfDays, rsvpGoing}){
        const d = new Date();
        d.setTime(d.getTime() + (numOfDays * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = 'isFormCompleted=true;rsvpGoing=' + rsvpGoing + ';' + expires + ";path=/";
    }

    getCookieValue(cookieName){
        return this.readCookies(cookieName);
    }

    deleteCookies(){
        this.writeFormCookies({numOfDays: 0, rsvpGoing: false});
        console.log('deleted');
    }
}