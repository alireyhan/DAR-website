import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_BASE_URL } from "../apiConfig";
import "./Dashboard.css";
import Navbar from "./Navbar";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import './what.css'

export default function Dashboard() {
    const { t } = useTranslation();
    const translateLabels = (text) => {
        if (!text || typeof text !== 'string') return text;
        return text
            .replace(/Customer:/g, t('dashboard.labels.customer') + ':')
            .replace(/Phone:/g, t('dashboard.labels.phone') + ':')
            .replace(/Email:/g, t('dashboard.labels.email') + ':')
            .replace(/Address:/g, t('dashboard.labels.address') + ':');
    };
    const message = "Hello, I want to get more information.";
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
            setError(t('dashboard.alerts.fail', { type: t(`dashboard.tabs.${type}`) }));
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="dashboard-container">
            <a
                href={`https://wa.me/96555559585?text=${encodeURIComponent(message)}`}

                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp />
            </a>
            <Navbar />
            <h1>{t('dashboard.title')}</h1>
            <p className="dashboard-subtitle">{t('dashboard.subtitle')}</p>

            <div className="dashboard-tabs">
                <button
                    className={activeTab === "orders" ? "active" : ""}
                    onClick={() => setActiveTab("orders")}
                >
                    {t('dashboard.tabs.orders')}
                </button>
                <button
                    className={activeTab === "invoices" ? "active" : ""}
                    onClick={() => setActiveTab("invoices")}
                >
                    {t('dashboard.tabs.invoices')}
                </button>
                <button
                    className={activeTab === "quotations" ? "active" : ""}
                    onClick={() => setActiveTab("quotations")}
                >
                    {t('dashboard.tabs.quotations')}
                </button>
                <button
                    className={activeTab === "measurements" ? "active" : ""}
                    onClick={() => setActiveTab("measurements")}
                >
                    {t('dashboard.tabs.measurements')}
                </button>
            </div>

            <div className="dashboard-content">
                {loading && <p className="loading-spinner">{t('dashboard.loading')}</p>}
                {!loading && error && <p className="error">{error}</p>}

                {!loading && !error && (
                    <div className="data-list">
                        {data.length === 0 ? (
                            <p>{t('dashboard.emptyState', { type: t(`dashboard.tabs.${activeTab}`) })}</p>
                        ) : activeTab === "quotations" ? (
                            <div className="quotations-grid">
                                {data.map((item) => (
                                    <div key={item._id || item.id} className="quotation-card">
                                        <div className="q-header">
                                            <span className="q-id">#{item._id?.slice(-6) || item.id}</span>
                                            <span className={`status-badge status-${(item.status || 'pending').toLowerCase()}`}>
                                                {t(`dashboard.status.${(item.status || 'pending').toLowerCase()}`)}
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
                                                <span>{t('dashboard.card.total')}:</span>
                                                <span className="amount">{item.totalAmount || item.amount || 0} KWD</span>
                                            </div>
                                            {item.comments && <p className="q-comments">"{translateLabels(item.comments)}"</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : activeTab === "measurements" ? (
                            <div className="quotations-grid">
                                {data.map((item) => (
                                    <div key={item._id} className="quotation-card">
                                        <div className="q-header">
                                            <span className="q-id">{translateLabels(item.name) || t('dashboard.card.measurement')}</span>
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
                                                    {t('dashboard.card.created')}: {new Date(item.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                            {item.comments && <p className="q-comments">"{translateLabels(item.comments)}"</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>{t('dashboard.table.id')}</th>
                                        <th>{t('dashboard.table.date')}</th>
                                        <th>{t('dashboard.table.amount')}</th>
                                        <th>{t('dashboard.table.status')}</th>
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
                                                    {t(`dashboard.status.${(item.status || 'pending').toLowerCase()}`)}
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
