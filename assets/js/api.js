
async function fetchProfileData() {
    const url = './'
    /profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}


'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json'