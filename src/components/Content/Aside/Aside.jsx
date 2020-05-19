import React from 'react';
import a from './Aside.module.css';

const Aside = () => {
    return (
        <aside className={a.aside}>
            <div className={a.wrapper}>
                <h3 className={a.h3}>
                    About me:
                </h3>
                <p className={a.p}><span className={a.span}>BIRTH:</span> 19.09.1985</p>
                <p className={a.p}><span className={a.span}>LOCATION:</span> Laos Tran</p>
                <p className={a.p}><span className={a.span}>WEBSITE:</span> www.mysite.ru</p>
                <p className={a.p}><span className={a.span}>JOB:</span> Currently I work as a system administrator and in parallel I study programming in
                    javascript</p>
            </div>
        </aside>
    )
}

export default Aside;