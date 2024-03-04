const express = require("express");
const {
  getAllReservation,
  addReservation,
  getReservation,
  updateReservation,
  deleteReservation,
  clearSpace,
  getUserReservation,
} = require("../controllers/reservation");

const router = express.Router({ mergeParams: true });

const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(protect, getAllReservation)
  .post(protect, authorize("admin", "user"), addReservation);
router
  .route("/:id")
  .get(protect, getReservation)
  .put(protect, authorize("admin", "user"), updateReservation)
  .delete(protect, authorize("admin", "user"), deleteReservation);
router
  .route("/user/:id")
  .get(protect, getUserReservation)

router.route("/clear/:id").delete(protect, authorize("admin"), clearSpace);

module.exports = router;
