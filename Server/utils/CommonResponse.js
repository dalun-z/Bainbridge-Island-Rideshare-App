/**
 * A series of common responses
 */

const express = require("express");

function Unauthorized(req, res) {
    res.status(401).json({
        error: "Unauthorized access"
    });
}

function FailedQuery(req, res) {
    res.status(500).json({
        error: "Could not perform query"
    });
}

function InvalidQuery(req, res) {
    res.status(400).json({
        error: "Bad request"
    });
}

function MissingParameters(req, res) {
    res.status(400).json({
        error: "Missing required parameters",
        params: req.body
    });
}

module.exports = {
    Unauthorized,
    FailedQuery,
    InvalidQuery,
    MissingParameters
}