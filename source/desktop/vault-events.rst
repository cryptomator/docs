Events and Event View
=====================

Vault events give information about the vault's status and certain activities.
There are several types of events, including conflict detection or corrupted files.
All vault events are logged in the event view, which can be opened from the main window.

.. note::

    Vault events are not persisted on the hard disk.
    They are only stored in memory and are lost when the application is closed.


.. _desktop/vault-events/event-viewer:

Event View
------------

The event view shows the events of all vaults.
To open the event view, click on the Bell icon in the left lower corner of the main window.
If new, unread events are present, the icon has a small red dot.

.. image:: ../img/desktop/event-view.png
    :scale: 50%
    :alt: Event view


The event view has an action bar at the top followed by the actual event list.
Events are displayed from newest (top) to oldest (bottom).
You can filter the events by the vault they belong to.
Also, you can clear the event log by clicking on the trash can icon.


.. _desktop/vault-events/vault-event:

Vault Event
-----------

A vault event consists of a title, its number of appearances in brackets, an affected file and a timestamp.
If you hover over the event, a button to open a context menu appears.
The context menu contains event specific actions, mostly to reveal affected files in the file manager.

If the vault of the event is locked, the event is anonymized.
To view the event details, you need to unlock the vault first.
