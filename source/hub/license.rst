.. _hub/license:

License
=======

Every Cryptomator Hub instance requires a license.
The license is bound to the instance and cannot be transferred to another instance.
As an Hub administrator, you can view license information in the administration area.

.. image:: ../img/hub/admin-area.png
    :alt: Administration area


.. _hub/license/seat:

Seat
----

A regular license contains a fixed number of *seats*.
A *seat* is taken for every user, which is assigned to at least one, not-archived vault.
Note that:

* If a user is not assigned to any vault, it *does not occupy* a seat.
* If a user is assigned to multiple vaults, it only *occupies one* seat.
* If :ref:`a user is created or imported to Hub <hub/user-group-management>`, it does not occupy a seat.

.. note:: Enterprise licenses can have have an unlimited number of seats. Visit `cryptomator.org <https://cryptomator.org/hub/>`_ for more information.


.. _hub/license/community-license:

Community License
-----------------

When you deploy Cryptomator Hub by yourself, it comes with a community license.
This license is valid for 5 seats.

.. _hub/license/buy-license:

Buying a License
----------------

The ``Get License`` button will redirect you to the Cryptomator Hub license store where you can buy a license for your instance.
If you buy a license (or upgrade the existing one), you will be automatically redirected back to your Hub instance.

.. image:: ../img/hub/billing-active-license.png
    :alt: Billing shows standard license
    :width: 920px
