import React from 'react';
import styles from './TaskTwo.module.css';
import {ProgressBarLine} from 'react-progressbar-line';


export default function TaskTwoContainer() {
    return (
        <div className={styles.double}>
        <div className={styles.tasktwoContainer}>
              <header className={styles.header}>
                  <h3>Social Traffic</h3>
                  <button>
                      See all
                  </button>
              </header>

              <main className={styles.main}>
                  <table className={styles.table}>
                      <thead className={styles.thead}>
                          <tr className={styles.heading}>
                              <th>REFFERAL</th>
                              <th>VISITORS</th>
                              <th></th>
                          </tr>
                      </thead>
                      <tbody className={styles.tbody}>
                          <tr className={styles.content}>
                              <td className={styles.refereal}>Facebook</td>
                              <td className={styles.refereal}>1480</td>
                              <td className={styles.red}>
                              <span className={styles.span}>60%</span>
                              <div>
                              <ProgressBarLine
                              className={styles.redd}
                                   value={60}
                                   styles={{
                                   path: {
                                        stroke: 'red'
                                          },
                                    trail: {
                                       stroke: 'lightgray'
                                            },
                                           text: {
                                         fill: 'gray',
                                       textAlign: 'center',
                                        fontSize: '0px'
                                            }
                                         }}
                                    />
                              </div>
                              </td>
                          </tr>

                          <tr>
                              <td className={styles.refereal}>Facebook</td>
                              <td className={styles.refereal}>5,480</td>
                              <td className={styles.green}>
                              <span className={styles.span}>70%</span>
                              <div>
                              <ProgressBarLine
                              className={styles.green}
                                   value={70}
                                   styles={{
                                   path: {
                                        stroke: 'green'
                                          },
                                    trail: {
                                       stroke: 'lightgray'
                                            },
                                           text: {
                                         fill: 'gray',
                                       textAlign: 'center',
                                        fontSize: '0px'
                                            }
                                         }}
                                    />
                              </div>
                              </td>
                          </tr>

                          <tr>
                              <td className={styles.refereal}>Google</td>
                              <td className={styles.refereal}>4,807</td>
                              <td className={styles.pur}>
                              <span className={styles.span}>80%</span>
                              <div>
                              <ProgressBarLine
                              className={styles.redd}
                                   value={80}
                                   styles={{
                                   path: {
                                        stroke: '#7565e4'
                                          },
                                    trail: {
                                       stroke: 'lightgray'
                                            },
                                           text: {
                                         fill: 'gray',
                                       textAlign: 'center',
                                        fontSize: '0px'
                                            }
                                         }}
                                    />
                              </div>
                              </td>
                          </tr>

                          <tr>
                              <td className={styles.refereal}>Instagram</td>
                              <td className={styles.refereal}>3,678</td>
                              <td className={styles.blue}>
                              <span className={styles.span}>75%</span>
                              <div>
                              <ProgressBarLine
                              className={styles.redd}
                                   value={75}
                                   styles={{
                                   path: {
                                        stroke: '#11b0ef'
                                          },
                                    trail: {
                                       stroke: 'lightgray'
                                            },
                                           text: {
                                         fill: 'gray',
                                       textAlign: 'center',
                                        fontSize: '0px'
                                            }
                                         }}
                                    />
                              </div>
                              </td>
                          </tr>

                          <tr>
                              <td className={styles.refereal}>twitter</td>
                              <td className={styles.refereal}>2,645</td>
                              <td className={styles.orange}>
                              <span className={styles.span}>30%</span>
                              <div>
                              <ProgressBarLine
                                   value={30}
                                   styles={{
                                   path: {
                                        stroke: '#fba340'
                                          },
                                    trail: {
                                       stroke: 'lightgray'
                                            },
                                           text: {
                                         fill: 'gray',
                                       textAlign: 'center',
                                        fontSize: '0px'
                                            }
                                         }}
                                    />
                              </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </main>
        </div>
        </div>
    )
}
