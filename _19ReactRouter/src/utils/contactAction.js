export const saveContactInfo = async({request})=> {
    try {
        const data = await request.formData();
        const objData = Object.fromEntries(data);
        console.log(objData);
        return null;      
    } catch (error) {
        console.log(error);
    }
}