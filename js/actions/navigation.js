/**
 * Created by Evan on 25/09/2016.
 */
 const COVERAGE_TAB = 'coverage_tab';
 const ANALYTICS_TAB = 'analytics_tab';
 const REPORTS_TAB = 'reports_tab';
 const NOTIFICATION_TAB = 'notification_tab';
 const MORE_TAB = 'more_tab';

 const SWITCH_TAB = 'switch_tab';

 const switchTab = (tab) => ({type:SWITCH_TAB,tab});

 module.exports = {
   COVERAGE_TAB,
   ANALYTICS_TAB,
   REPORTS_TAB,
   NOTIFICATION_TAB,
   SWITCH_TAB,
   switchTab
 };
