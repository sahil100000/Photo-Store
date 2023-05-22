import React from 'react'
import { UseFirestore } from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    const { Docs } = UseFirestore('images');
    return (
        <div className="img-grid">
            {Docs && Docs.map(doc => (
                <motion.div className='img-wrap img' key={doc.id} 
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick = { () => setSelectedImg(doc.url) }
                >
                    <motion.img src={doc.url} alt="item here" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export {ImageGrid};