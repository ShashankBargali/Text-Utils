import React from 'react'

export default function Alert(prop) {
    return (
        <div style={{ height: '50px' }}>
            {prop.alert && <div>
                <div className={`alert alert-${prop.mode === 'light' ? 'dark' : 'light'} alert-dismissible fade show`} role="alert">
                    <strong>{prop.alert}!</strong>
                </div>
            </div>}
        </div>
    )
}
