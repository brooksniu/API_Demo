export class Router {
    static routes = {};
    constructor(homeFunc) {
        this["home"] = homeFunc;
    }

    addPage(page, pageFunc) {
        this[page] = pageFunc;
    }

    navigate(page, statePopped) {
        if (this[page] == undefined) {
            return;
        }
        let hash;
        let link;
        if (page == home) {
            hash = "";
            link = window.location.origin;
        }
        else {
            hash = "#" + page;
            link = window.location.href + hash;
        }
        if (statePopped != false && window.location.hash != hash) {
            window.history.pushState({"curr_page" : page}, "", link);

        }
        this[page]();
    }
}