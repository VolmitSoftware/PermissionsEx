import axios from 'axios'

const getAll = async () => {
    try {
        const response = await axios.get(
            '/api/backups'
        )
        return response.data.list
    } catch (error) {
        console.log(error)
    }
}

export default { getAll }