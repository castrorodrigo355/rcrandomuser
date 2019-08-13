const profileSize = 50;
const usersUrl = `https://randomuser.me/api/?results=${profileSize}`;

export default {
    getUsers
}

async function getUsers() {
    const request = await fetch(`${usersUrl}`);
    const data = await request.json();
    return data.results;
}