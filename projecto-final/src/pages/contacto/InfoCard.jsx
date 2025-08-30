import React from 'react'

export const InfoCard = ({ icon: Icon, title, children }) => {
    return (
        <div className='p-6'>
            <div className='flex items-center gap-2 mb-5'>
                <div className='p-2 bg-secondary rounded-lg'>
                    <Icon size={20} />
                </div>
                <h2>
                    {title}
                </h2>
            </div>

            <div className='text-cinza'>
                {children}
            </div>
        </div>
    )
}
