/**
 * Created by Evan on 25/09/2016.
 */

const LOGIN = 'LOGIN'

function loginAction(id, name) {
    return {
        type: 'LOGIN',
        id,
        name
    };
}

module.exports = {loginAction, LOGIN}