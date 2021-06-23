import React from 'react';
import styles from './HomeTwo.module.css';

function AbBottom({IconLike,IconShare,IconComment,commentCount,likeCount,shareCount}) {
    return (
        <div className={styles.abBottom}>
            <div className={styles.bottomSub}>
                <button>
                    {IconLike ? <IconLike /> : {IconLike}}
                </button>
                <p>{likeCount}</p>
            </div>
            <div className={styles.bottomSub}>
                <button>
                {IconComment ? <IconComment /> : {IconComment}}
                </button>
                <p>{commentCount}</p>
            </div>
            <div className={styles.bottomSub}>
                <button>
                {IconShare ? <IconShare /> : {IconShare}}
                </button>
                <p>{shareCount}</p>
            </div>
        </div>
    )
}

export default AbBottom;