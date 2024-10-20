
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = req.body;
        console.log("formdata3: ",formData)

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxtTNMEszMm3zTPZ0u3dn5tO4uVwDYtgOK9hYQDG1hx8r8yIknqpULv1fvijHIMY-x7Ag/exec';

        try {
            const response = await axios.post(scriptURL, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
