// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') {
    if (req.body.name) {
      res.status(200).json({ status: "200", message: "response success post", name: req.body.name })
    } else {
      res.status(500).json({ status: "500", message: "response error post" })
    }
  } 
  if (req.method === 'PUT') {
    if (req.body.name) {
      res.status(200).json({ status: "200", message: "response success put" , name: req.body.name})
    } else {
      res.status(500).json({ status: "500",  message: "response error put" })
    }
  } else {
    // Handle any other HTTP method
    res.json({ name: "response from get" })
  }

}
