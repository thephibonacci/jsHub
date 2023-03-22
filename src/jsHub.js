/**
 *   @author: Fibo <thephibonacci@gmail.com>
 *   @version 1.0.0
 *   @copyright thephibonacci (c) 2023 - all right reserved
 *
 *   @return {object}
 */
class jsHub {
    #selector;
    #readyHandlers = [];

    constructor(selector = null) {
        if (selector) {
            if (typeof selector === "object") {
                this.#selector = selector;
            } else {
                this.#selector = document.querySelectorAll(selector);
            }
        } else {
            this.#selector = {};
        }

        document.addEventListener("DOMContentLoaded", () => {
            this.#readyHandlers.forEach((handler) => handler());
        });
        return this;
    }

    get() {
        return this.#selector[0];
    }

    getAll() {
        return this.#selector;
    }

    css(cssText) {
        this.#selector.forEach((elem) => {
            elem.style.cssText = cssText;
        })
        return this;
    }

    on(event, callback) {
        this.#selector.forEach((elem) => {
            elem.addEventListener(event, callback)
        })
        return this;
    }

    attr(key, val = null) {
        if (val === null) {
            return this.#selector[0].getAttribute(key)
        } else {
            this.#selector.forEach((elem) => {
                elem.setAttribute(key, val)
            })
        }
        return this;
    }

    removeAttr(key) {
        this.#selector.forEach((elem) => {
            elem.removeAttribute(key)
        })
        return this;
    }

    html(html = null) {
        if (html === null) {
            return this.#selector[0].innerHTML;
        }
        this.#selector.forEach((elem) => {
            elem.innerHTML = html;
        });
        return this;
    }

    val(value = null) {
        if (value === null) {
            return this.#selector[0].value;
        }
        this.#selector.forEach((elem) => {
            elem.value = value;
        });
        return this;
    }

    text(text = null) {
        if (text === null) {
            return this.#selector[0].innerText;
        }
        this.#selector.forEach((elem) => {
            elem.innerText = text;
        });
        return this;
    }

    create(elemName, content = null) {
        let elem = document.createElement(elemName);
        if (content) {
            elem.append(content);
        }
        this.#selector.forEach((e) => {
            e.appendChild(elem)
        });
        return this;
    }

    addClass(...className) {
        className.forEach((clsName) => {
            this.#selector.forEach((elem) => {
                elem.classList.add(clsName)
            })
        })
        return this;
    }

    removeClass(...className) {
        className.forEach((clsName) => {
            this.#selector.forEach((elem) => {
                elem.classList.remove(clsName)
            })
        })
        return this;
    }

    toggleClass(...className) {
        className.forEach((clsName) => {
            this.#selector.forEach((elem) => {
                elem.classList.toggle(clsName)
            })
        })
        return this;
    }

    replaceClass(className, newClassName) {
        this.#selector.forEach((elem) => {
            elem.classList.replace(className, newClassName);
        })
        return this;
    }

    hasClass(className) {
        return this.#selector[0].classList.contains(className);
    }

    width() {
        return this.#selector[0].offsetWidth;
    }

    height() {
        return this.#selector[0].offsetHeight;
    }

    append(content) {
        this.#selector.forEach((elem) => {
            elem.append(content);
        })
        return this;
    }

    prepend(content) {
        this.#selector.forEach((elem) => {
            elem.prepend(content);
        })
        return this;
    }

    remove() {
        this.#selector.forEach((elem) => {
            elem.remove();
        })
        return this;
    }

    fadeIn(duration) {
        this.#selector.forEach((element) => {
            element.style.opacity = 0;
            element.style.display = "block";
            let start = performance.now();

            function step(timestamp) {
                let progress = (timestamp - start) / duration;
                element.style.opacity = Math.min(progress, 1);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            }

            window.requestAnimationFrame(step);
        })
        return this;
    }

    fadeOut(duration) {
        this.#selector.forEach((element) => {
            let start = performance.now();

            function step(timestamp) {
                let progress = (timestamp - start) / duration;
                element.style.opacity = Math.max(1 - progress, 0);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    element.style.display = "none";
                }
            }

            window.requestAnimationFrame(step);
        })
        return this;
    }

    show(duration = 0) {
        setTimeout(() => {
            this.#selector.forEach((e) => {
                e.style.display = "block";
                e.style.visibility = "visible";
            });
        }, duration)
        return this;
    }

    hide(duration = 0) {
        setTimeout(() => {
            this.#selector.forEach((e) => {
                e.style.visibility = "hidden";
                e.style.display = "none";
            });
        }, duration)
        return this;
    }

    slideUp(duration) {
        this.#selector.forEach((element) => {
            let height = element.scrollHeight;
            let start = performance.now();

            function step(timestamp) {
                let progress = (timestamp - start) / duration;
                element.style.height = Math.max(height - height * progress, 0) + "px";
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    element.style.display = "none";
                    element.style.height = "";
                }
            }

            window.requestAnimationFrame(step);
        });
        return this;
    }

    slideDown(duration) {
        this.#selector.forEach((element) => {
            let height = element.scrollHeight;
            element.style.height = "0";
            element.style.display = "block";
            let start = performance.now();

            function step(timestamp) {
                let progress = (timestamp - start) / duration;
                element.style.height = Math.min(height * progress, height) + "px";
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    element.style.height = "";
                }
            }

            window.requestAnimationFrame(step);
        });
        return this;
    }

    slideRight(duration) {
        this.#selector.forEach((element) => {
            let width = element.scrollWidth;
            element.style.width = "0";
            element.style.display = "block";
            let start = performance.now();

            function step(timestamp) {
                let progress = (timestamp - start) / duration;
                element.style.width = Math.min(width * progress, width) + "px";
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    element.style.width = "";
                }
            }

            window.requestAnimationFrame(step);
        });
        return this;
    }

    slideLeft(duration) {
        this.#selector.forEach((element) => {
            let width = element.scrollWidth;
            let start = performance.now();

            function step(timestamp) {
                let progress = (timestamp - start) / duration;
                element.style.width = Math.max(width - width * progress, 0) + "px";
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    element.style.display = "none";
                    element.style.width = "";
                }
            }

            window.requestAnimationFrame(step);
        });
        return this;
    }

    trigger(eventName) {
        this.#selector.forEach((element) => {
            let event = new Event(eventName);
            element.dispatchEvent(event);
        })
        return this;
    }

    ready(handler) {
        if (document.readyState === "complete") {
            handler();
        } else {
            this.#readyHandlers.push(handler);
        }
    }

    parent() {
        return this.#selector[0].parentNode;
    }

    children() {
        return this.#selector[0].children;
    }
}

const $ = function (options) {
    return new jsHub(options);
};

$.ID = function (id) {
    return new jsHub('#' + id);
};
$.TAG = function (tagName) {
    return new jsHub('#' + tagName);
};
$.CLASS = function (className) {
    return new jsHub('.' + className);
};
$.NAME = function (name) {
    return new jsHub(`[name="${name}"]`);
};
$.AJAX = function (options) {
    const xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url, true);
    if (options.headers) {
        for (let header in options.headers) {
            xhr.setRequestHeader(header, options.headers[header]);
        }
    }
    if (options.timeout) {
        xhr.timeout = options.timeout;
        xhr.ontimeout = function () {
            options.error('Request timed out');
        }
    }
    xhr.responseType = options.responseType || "text";
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = xhr.response;
                if (options.responseType === 'json') {
                    response = JSON.parse(response);
                }
                options.success(response, xhr.status);
            } else {
                options.error(xhr.statusText, xhr.status);
            }
        }
    };
    if (options.cache) {
        const cachedResponse = localStorage.getItem(options.url);
        if (cachedResponse) {
            options.success(JSON.parse(cachedResponse), 200);
            return;
        }
    }
    xhr.send(options.data);
    if (options.cache) {
        xhr.addEventListener('load', function () {
            localStorage.setItem(options.url, xhr.responseText);
        });
    }
}


function is_string(value) {
    return typeof value == "string";
}

function is_array(value) {
    return Array.isArray(value);
}

function is_numeric(value) {
    return typeof value == 'number';
}

function is_function(value) {
    return typeof value == 'function';
}

function is_undefined(value) {
    return typeof value == 'undefined';
}

function is_object(value) {
    return typeof value == 'object';
}

function is_bool(value) {
    return typeof value == 'boolean';
}

function empty(variable) {
    return typeof variable === "undefined" || variable === null || variable === "";
}

function create(element, elemName, content = null) {
    let elem = document.createElement(elemName);
    if (content) {
        elem.append(content);
    }
    element.appendChild(elem)
}

function strval(variable) {
    return String(variable);
}

function intval(variable) {
    return parseInt(variable);
}

function floatval(variable) {
    return parseFloat(variable);
}

function isset(variable) {
    return typeof variable !== "undefined" && variable !== null;
}

function buildUrl(baseUrl, queryParams) {
    const url = new URL(baseUrl);
    Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
    return url.toString();
}

function buildQueryString(filters) {
    const queryParams = new URLSearchParams();
    for (const [key, value] of Object.entries(filters)) {
        if (Array.isArray(value)) {
            value.forEach((v) => queryParams.append(key, v));
        } else if (value !== null && value !== undefined) {
            queryParams.set(key, value);
        }
    }
    return queryParams.toString() ? `?${queryParams.toString()}` : '';
}

function parseQueryString(queryString) {
    const queryParams = new URLSearchParams(queryString);
    const filters = {};
    for (const [key, value] of queryParams.entries()) {
        if (filters.hasOwnProperty(key)) {
            if (Array.isArray(filters[key])) {
                filters[key].push(value);
            } else {
                filters[key] = [filters[key], value];
            }
        } else {
            filters[key] = value;
        }
    }
    return filters;
}

function updateQueryString(params) {
    const searchParams = new URLSearchParams(window.location.search);
    for (const [key, val] of Object.entries(params)) {
        searchParams.set(key, val);
    }
    return window.location.pathname + '?' + searchParams.toString();
}

function css(elem, cssText) {
    elem.style.cssText = cssText;
}

function html(elem, html) {
    elem.innerHTML = html;
}

function clear() {
    console.clear();
}

function log(...value) {
    value.forEach((val) => {
        console.log(val);
    });
}

function err(...value) {
    value.forEach((val) => {
        console.error(val);
    });
}

function warn(...value) {
    value.forEach((val) => {
        console.warn(val);
    });
}

function Id(id) {
    return document.getElementById(id);
}

function Class(className, first = false) {
    if (first) {
        return document.getElementsByClassName(className)[0];
    } else {
        return document.getElementsByClassName(className);
    }
}

function Name(name) {
    return document.getElementsByName(name)
}

function Tag(tagName) {
    return document.getElementsByTagName(tagName)
}

function setCookie(name, value, expire) {
    date = new Date();
    date.setTime(date.getTime() + (expire * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
function getCookie(name) {
    name = name + "=";
    let data = document.cookie.split(';'), value;
    for (let i = 0; i < data.length; i++) {
        value = data[i];
        while (value.charAt(0) == ' ') {
            cvalue = value.substring(1);
        }
        if (value.indexOf(name) == 0) {
            return value.substring(name.length, value.length);
        }
    }
    return "";
}