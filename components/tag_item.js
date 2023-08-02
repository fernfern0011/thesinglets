import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import styles from '/styles/components/tag_item.module.css';
import SearchBar from '/components/searchBar.js';
import BasicSwitches from '/components/switch.js';
import TagItemManualContents from '/components/tag_item_manual_contents.js';

export default function TagItem({ onDoneButtonClick }) {
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
                    className={`${styles.tablinks} ${
                      activeTab === 'search' ? styles.active : ''
                    }`}
                    onClick={() => handleTabChange('search')}
                  >
                    Search
                  </button>
                  {/* Manual tab */}
                  <button
                    className={`${styles.tablinks} ${
                      activeTab === 'manual' ? styles.active : ''
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
                      className={`${styles.tabcontent} ${
                        activeTab === 'search' ? styles.activeContent : ''
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
                {activeTab === 'manual' && (
                  <>
                    <div
                      id="manual"
                      className={`${styles.tabcontent} ${
                        activeTab === 'manual' ? styles.activeContent : ''
                      }`}
                    >
                      <TagItemManualContents />
                      <Button variant="text" className={styles.cancel}>Cancel</Button>
                      <Button
                    variant="text"
                    onClick={() => {
                      handleClose();
                      onDoneButtonClick();
                      }}
                    className={styles.done}>Done</Button>
                    </div>
                  </>
                )}
              </div>
            </main>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}