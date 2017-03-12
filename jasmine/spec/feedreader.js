/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('and URLs are defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i]).toBeDefined();
                expect(allFeeds[i].url).toBeDefined();
            }
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have defined names and that name is not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).toMatch(/\w/);
            }
        });
    });
    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            expect($('body')).toHaveClass('menu-hidden');
        });
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('changes visibility when clicked and hides when clicked again', function() {
            var spyEvent = spyOnEvent('.menu-icon-link', 'click');
            $('.menu-icon-link').click();
            expect('click').toHaveBeenTriggeredOn('.menu-icon-link');
            expect(spyEvent).toHaveBeenTriggered();
            expect($('body')).not.toHaveClass('menu-hidden');
            $('.menu-icon-link').click();
            expect('click').toHaveBeenTriggeredOn('.menu-icon-link');
            expect(spyEvent).toHaveBeenTriggered();
            expect($('body')).toHaveClass('menu-hidden');
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        // The following test was used to check that async call is being performed and that
        // the test would fail because it was not accounted for.
        // it('should fail because not accounting for asynchrounous call', function() {
        //    loadFeed(0);
        //    expect($('.entry-link')).not.toBeInDOM();
        // });
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('should have at least a single entry in entry within the feed container', function(done) {
            expect($('.entry-link')).toBeInDOM();
            done();
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var originalTimeout, feedList, firstFeed, secondFeed;
        var FEED0 = 0,
            FEED1 = 1,
            FEED2 = 2,
            FEED3 = 3;
        beforeAll(function(done) {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            loadFeed(FEED0, function() {
                feedList = $('.feed').find('.entry-link');
                firstFeed = feedList[0].innerText;
                console.log(firstFeed);
                expect(firstFeed).toBeDefined();
                done();
            });
        });
        it('ensures that the content changes when a new feed is loaded', function(done) {
            loadFeed(FEED1, function() {
                feedList = $('.feed').find('.entry-link');
                secondFeed = feedList[0].innerText;
                console.log(secondFeed);
                expect(secondFeed).toBeDefined();
                expect(firstFeed).not.toEqual(secondFeed);
                done();
            });
        });
        it('ensures that the content changes when a new feed is loaded', function(done) {
            loadFeed(FEED2, function() {
                feedList = $('.feed').find('.entry-link');
                secondFeed = feedList[0].innerText;
                console.log(secondFeed);
                expect(secondFeed).toBeDefined();
                expect(firstFeed).not.toEqual(secondFeed);
                done();
            });
        });
        it('ensures that the content changes when a new feed is loaded', function(done) {
            loadFeed(FEED3, function() {
                feedList = $('.feed').find('.entry-link');
                secondFeed = feedList[0].innerText;
                console.log(secondFeed);
                expect(secondFeed).toBeDefined();
                expect(firstFeed).not.toEqual(secondFeed);
                done();
            });
        });
        afterAll(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
    });
    /* NEW TEST SUITES */
    describe('Clicking a link in the menu', function() {
        /* TODO: Write a test that ensures when the menu is opened,
         * when a menu item is clicked, the correct feed is loaded
         * and that at least a single .entry element within
         * the .feed container
        */
        xit('opens the correct feed');
        /* TODO: Write a test that ensures the menu will automatically close
         * after a menu item has been selected
         */
        it('will automatically close the Menu window');
        /* TODO: Write a test that ensures clicking on menu links can
         * only be done when menu is visible
         */
         it('is only possible when menu is visible', function() {
            pending();
         });
    });
    describe('Day / Night mode', function() {
        /* TODO: Create a day / night mode so that the website checks the local time and determines the
         * day or night mode background and text colors based on the local time.
         */
        it('will have a light colored background with contrasting text between 6am - 6pm', function() {
            pending();
        });
        it('will have a dark colored background with contrasting text between 6pm - 6am', function() {
            pending();
        });
    });
    describe('Day/Night button', function() {
        /* TODO: Create a button in the header bar that, when clicked,
         * changes the color scheme to have a dark background with
         * light colored text.
         */
         it('changes the background color and text color when clicked', function() {
            pending();
         });
         /* TODO: Create a test that makes sure that the color scheme changes when clicked,
          * and then changes back to the original color when it is clicked again.
          */
         it('toggles the background and text color when clicked, and clicked again', function() {
            pending();
         });
    });
}());
