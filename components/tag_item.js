import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import styles from '/styles/components/tag_item.module.css';
import SearchBar from '/components/searchBar.js';
import BasicSwitches from '/components/switch.js';
import TagItemManualContents from '/components/tag_item_manual_contents.js';
import TagItemManualContents2 from '/components/tag_item_manual_contents2.js';
import TagItemManualContents3 from '/components/tag_item_manual_contents3.js';
import TagItemManualContents4 from '/components/tag_item_manual_contents4.js';

export default function TagItem({ onDoneButtonClick }) {
  const storedTag1 = JSON.parse(localStorage.getItem('tag1'));
  const storedTag2 = JSON.parse(localStorage.getItem('tag2'));
  const storedTag3 = JSON.parse(localStorage.getItem('tag3'));
  const storedTag4 = JSON.parse(localStorage.getItem('tag4'));
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  // State to keep track of the currently active tab
  const [activeTab, setActiveTab] = React.useState('search');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className={styles.overlayButton}
      >
        TagItem
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <main className={styles.main}>
              <div className={styles.form}>
                <div className={styles.tab}>
                  {/* Search tab */}
                  <button
                    className={`${styles.tablinks} ${activeTab === 'search' ? styles.active : ''
                      }`}
                    onClick={() => handleTabChange('search')}
                  >
                    Search
                  </button>
                  {/* Manual tab */}
                  <button
                    className={`${styles.tablinks} ${activeTab === 'manual' ? styles.active : ''
                      }`}
                    onClick={() => handleTabChange('manual')}
                  >
                    Manual
                  </button>
                </div>
                <hr className={styles.horizontalLine} />

                {/* Content for the Search tab */}
                {activeTab === 'search' && (
                  <>
                    <div
                      id="search"
                      className={`${styles.tabcontent} ${activeTab === 'search' ? styles.activeContent : ''
                        }`}
                    >
                      <SearchBar />
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <BasicSwitches sx={{ transform: 'scale(0.1)' }} /> {/* Adjust the scale value as needed */}
                        <span style={{ marginLeft: '0px' }} className={styles.closet}>My Closet</span>
                      </div>
                      <div style={{ fontWeight: 'bold', marginTop: '20px' }}>
                        Search Keyword Ranking 1
                      </div>
                      <Button variant="text" className={styles.cancel}>Cancel</Button>
                      <Button variant="text" className={styles.done}>Done</Button>
                    </div>
                  </>
                )}

                {/* Content for the Manual tab */}
                {activeTab === 'manual' && storedTag1 === null ? (
                  <>
                    <div
                      id="manual"
                      className={`${styles.tabcontent} ${activeTab === 'manual' ? styles.activeContent : ''
                        }`}
                    >
                      <TagItemManualContents />
                      <Button variant="text" className={styles.cancel}>Cancel</Button>
                      <Button
                        variant="text"
                        onClick={() => {
                          handleClose();
                        }}
                        className={styles.done}
                      >
                        Done
                      </Button>
                    </div>
                  </>
                ) : null}

                {activeTab === 'manual' && (storedTag1 !== null && storedTag2 === null) ? (
                    <>
                    <div
                      id="manual"
                      className={`${styles.tabcontent} ${activeTab === 'manual' ? styles.activeContent : ''
                        }`}
                    >
                      <TagItemManualContents2 />
                      <Button variant="text" className={styles.cancel}>Cancel</Button>
                      <Button
                        variant="text"
                        onClick={() => {
                          handleClose();
                        }}
                        className={styles.done}
                      >
                        Done
                      </Button>
                    </div>
                  </>
                ) : 
                <>
                  {activeTab === 'manual' && (storedTag1 !== null && storedTag2.brandName === '') ? (
                    <>
                    <div
                      id="manual"
                      className={`${styles.tabcontent} ${activeTab === 'manual' ? styles.activeContent : ''
                        }`}
                    >
                      <TagItemManualContents2 />
                      <Button variant="text" className={styles.cancel}>Cancel</Button>
                      <Button
                        variant="text"
                        onClick={() => {
                          handleClose();
                        }}
                        className={styles.done}
                      >
                        Done
                      </Button>
                    </div>
                  </>
                  ) : null }
                  </>}

                {activeTab === 'manual' && storedTag1 !== null && storedTag2 !== null && storedTag4 === null ? (
                  <>
                  {storedTag2.brandName !== '' ? (
                    <>
                    <div
                      id="manual"
                      className={`${styles.tabcontent} ${activeTab === 'manual' ? styles.activeContent : ''
                        }`}
                    >
                      <TagItemManualContents3 />
                      <Button variant="text" className={styles.cancel}>Cancel</Button>
                      <Button
                        variant="text"
                        onClick={() => {
                          handleClose();
                        }}
                        className={styles.done}
                      >
                        Done
                      </Button>
                    </div>
                  </>
                  ) : null}
                </>
                ) :
                <>
                {activeTab === 'manual' && storedTag1 !== null && storedTag2 !== null && storedTag3 === null ? (
                  <>
                  <div
                    id="manual"
                    className={`${styles.tabcontent} ${activeTab === 'manual' ? styles.activeContent : ''
                      }`}
                  >
                    <TagItemManualContents3 />
                    <Button variant="text" className={styles.cancel}>Cancel</Button>
                    <Button
                      variant="text"
                      onClick={() => {
                        handleClose();
                      }}
                      className={styles.done}
                    >
                      Done
                    </Button>
                  </div>
                </>
                ) : null}
              </>}

              {activeTab === 'manual' && storedTag1 !== null && storedTag2 !== null && storedTag3 !== null ? (
                  <>
                  {storedTag3.brandName !== '' ? (
                    <>
                    <div
                      id="manual"
                      className={`${styles.tabcontent} ${activeTab === 'manual' ? styles.activeContent : ''
                        }`}
                    >
                      <TagItemManualContents4 />
                      <Button variant="text" className={styles.cancel}>Cancel</Button>
                      <Button
                        variant="text"
                        onClick={() => {
                          handleClose();
                        }}
                        className={styles.done}
                      >
                        Done
                      </Button>
                    </div>
                  </>
                  ) : null}
                </>
                ) : null}
              </div>
            </main>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}