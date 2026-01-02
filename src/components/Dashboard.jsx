import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_BASE_URL } from "../apiConfig";
import "./Dashboard.css";
import Navbar from "./Navbar";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("orders");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { user } = useSelector((state) => state.user);

    // Fetch data when activeTab changes
    useEffect(() => {
        if (user && user._id) {
            fetchData(activeTab);
        }
    }, [activeTab, user]);

    const fetchData = async (type) => {
        setLoading(true);
        setError(null);
        try {
            let endpoint = '';
            if (type === 'orders') {
                endpoint = `${API_BASE_URL}/orders/customer/${user._id}`;
            } else if (type === 'invoices') {
                endpoint = `${API_BASE_URL}/invoices/by-order-id/${user._id}`;
            } else if (type === 'quotations') {
                endpoint = `${API_BASE_URL}/quotations`;
            } else if (type === 'measurements') {
                endpoint = `${API_BASE_URL}/measurements`;
            }

            console.log(`Fetching ${type} from ${endpoint}`);
            const response = await axios.get(endpoint);
            let fetchedData = response.data;
            setData(Array.isArray(fetchedData) ? fetchedData : []);
        } catch (err) {
            console.error(`Error fetching ${type}:`, err);
            setError(`Failed to load ${type}.`);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="dashboard-container">
            <Navbar />
            <h1>My Dashboard</h1>
            <p className="dashboard-subtitle">Manage your orders, invoices, quotations, and measurements.</p>

            <div className="dashboard-tabs">
                <button
                    className={activeTab === "orders" ? "active" : ""}
                    onClick={() => setActiveTab("orders")}
                >
                    My Orders
                </button>
                <button
                    className={activeTab === "invoices" ? "active" : ""}
                    onClick={() => setActiveTab("invoices")}
                >
                    My Invoices
                </button>
                <button
                    className={activeTab === "quotations" ? "active" : ""}
                    onClick={() => setActiveTab("quotations")}
                >
                    My Quotations
                </button>
                <button
                    className={activeTab === "measurements" ? "active" : ""}
                    onClick={() => setActiveTab("measurements")}
                >
                    My Measurements
                </button>
            </div>

            <div className="dashboard-content">
                {loading && <p className="loading-spinner">Loading...</p>}
                {!loading && error && <p className="error">{error}</p>}

                {!loading && !error && (
                    <div className="data-list">
                        {data.length === 0 ? (
                            <p>No {activeTab} found.</p>
                        ) : activeTab === "quotations" ? (
                            <div className="quotations-grid">
                                {data.map((item) => (
                                    <div key={item._id || item.id} className="quotation-card">
                                        <div className="q-header">
                                            <span className="q-id">#{item._id?.slice(-6) || item.id}</span>
                                            <span className={`status-badge status-${(item.status || 'pending').toLowerCase()}`}>
                                                {item.status || "PENDING"}
                                            </span>
                                        </div>
                                        <div className="q-date">
                                            {new Date(item.createdAt || item.date).toLocaleDateString()}
                                        </div>

                                        <div className="q-items">
                                            <h4>Items ({item.items?.length || 0})</h4>
                                            <ul>
                                                {item.items?.map((subItem, idx) => (
                                                    <li key={subItem._id || idx}>
                                                        <span>{subItem.quantity}x {subItem.item}</span>
                                                        <span>{subItem.amount ? subItem.amount + ' KWD' : '-'}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="q-footer">
                                            <div className="q-total">
                                                <span>Total:</span>
                                                <span className="amount">{item.totalAmount || item.amount || 0} KWD</span>
                                            </div>
                                            {item.comments && <p className="q-comments">"{item.comments}"</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : activeTab === "measurements" ? (
                            <div className="quotations-grid">
                                {data.map((item) => (
                                    <div key={item._id} className="quotation-card">
                                        <div className="q-header">
                                            <span className="q-id">{item.name || 'Measurement'}</span>
                                            <span className="status-badge status-processing">
                                                {item.type || 'Design'}
                                            </span>
                                        </div>
                                        <div className="q-date">
                                            {new Date(item.measurementDate || item.createdAt).toLocaleDateString()}
                                        </div>

                                        <div className="q-items">
                                            <div style={{ marginBottom: '1rem' }}>
                                                <h4 style={{ display: 'inline', marginRight: '0.5rem' }}>Dimensions:</h4>
                                                <span style={{ color: '#fff', fontWeight: 'bold' }}>{item.measurment}</span>
                                            </div>

                                            <h4>Line Items ({item.lineItems?.length || 0})</h4>
                                            <ul>
                                                {item.lineItems?.map((subItem, idx) => (
                                                    <li key={subItem._id || idx}>
                                                        <span>{subItem.name} ({subItem.description})</span>
                                                        <span>{subItem.price ? subItem.price + ' KWD' : '0 KWD'}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="q-footer">
                                            <div className="q-total">
                                                <span className="amount" style={{ fontSize: '0.9rem', color: '#888' }}>
                                                    Created: {new Date(item.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                            {item.comments && <p className="q-comments">"{item.comments}"</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Date</th>
                                        <th>Amount/Total</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item._id || item.id}>
                                            <td>#{item._id?.slice(-6) || item.id}</td>
                                            <td>{new Date(item.createdAt || item.date).toLocaleDateString()}</td>
                                            <td>{item.totalAmount || item.amount || item.total} KWD</td>
                                            <td>
                                                <span className={`status-badge status-${(item.status || 'pending').toLowerCase()}`}>
                                                    {item.status || "Pending"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
